<template>
  <v-card
    class="text-body-2 tl-overlay"
    tile
    flat
    style="width: 100%"
  >
    <v-overlay absolute :value="showOverlay || (!forceCloseOverlay && $socket.disconnected)" opacity="0.8">
      <div v-if="isLoading">
        {{ $t("views.watch.chat.loading") }}
      </div>
      <div v-else class="pa-3">
        {{ overlayMessage }}
      </div>
      <v-btn v-if="$socket.disconnected" class="mr-2" @click="tlJoin()">
        {{ $t("views.watch.chat.retryBtn") }}
      </v-btn>
      <v-btn @click="() => { forceCloseOverlay = true; showOverlay = false; }">
        {{ $t("views.app.close_btn") }}
      </v-btn>
    </v-overlay>
    <v-card-subtitle class="py-1 d-flex justify-space-between">
      <div :class="connected ? 'green--text' : 'red--text'">
        TLdex [{{ liveTlLang }}]
      </div>
      <span>
        <v-dialog v-model="expanded" width="800">
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              x-small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{ mdiArrowExpand }}
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <portal-target name="expandedMessage" class="d-flex tl-expanded" />
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn text color="red" @click="expanded = false">
                {{ $t("views.app.close_btn") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <WatchLiveTranslationsSetting />
      </span>
    </v-card-subtitle>
    <v-divider />
    <portal to="expandedMessage" :disabled="!expanded" slim>
      <message-renderer
        ref="tlBody"
        :tl-history="tlHistory"
        :font-size="liveTlFontSize"
      >
        <v-btn
          v-if="!historyLoading"
          text
          color="primary"
          :disabled="completed"
          @click="loadMessages()"
        >
          {{ completed ? "Start of Messages" : "Load More" }}
        </v-btn>
        <v-btn
          v-if="!completed && !historyLoading && expanded"
          text
          color="primary"
          @click="loadMessages(false, true)"
        >
          Load All
        </v-btn>
      </message-renderer>
    </portal>
  </v-card>
</template>

<script lang="ts">
import { API_BASE_URL } from "@/utils/backend-api";
import { dayjs } from "@/utils/time";
import VueSocketIOExt from "vue-socket.io-extended";
import { Manager } from "socket.io-client";
import Vue from "vue";
import WatchLiveTranslationsSetting from "./LiveTranslationsSetting.vue";
import chatMixin from "./chatMixin";
import MessageRenderer from "./MessageRenderer.vue";

const manager = new Manager(API_BASE_URL, {
    reconnectionAttempts: 10,
    transports: ["websocket"],
    upgrade: false,
    path: "/api/socket.io/",
    secure: true,
    autoConnect: false,
});

Vue.use(VueSocketIOExt, manager.socket("/"));

export default {
    name: "LiveTranslations",
    components: {
        WatchLiveTranslationsSetting,
        MessageRenderer,
    },
    mixins: [chatMixin],
    data() {
        return {
            overlayMessage: this.$t("views.watch.chat.loading"),
            showOverlay: false,
            forceCloseOverlay: false,
            isLoading: true,
            success: false,
            selectedChannel: "",
        };
    },
    sockets: {
        reconnect_attempt(attempt) {
            const vm = this as any;
            vm.overlayMessage = `${this.$t("views.watch.chat.status.reconnecting")} ${attempt}/10`;
        },
        reconnect_failed() {
            const vm = this as any;
            vm.overlayMessage = this.$t("views.watch.chat.status.reconnectFailed");
        },
        connect_error() {
            const vm = this as any;
            vm.overlayMessage = this.$t("views.watch.chat.status.reconnectFailed");
        },
        connect() {
            const vm = this as any;
            vm.tlJoin();
        },
        disconnect() {
            const vm = this as any;
            vm.tlLeave();
        },
        // Sucessfully connected to live stream chat
        subscribeSuccess(obj) {
            const vm = this as any;
            // make sure to not listen to duplicate events of the same id (i.e. same chat room open in mv)
            if (obj.id === vm.video.id && !vm.success) {
                console.log("Subbed to", vm.liveTlLang, obj.id);
                vm.success = true;
                vm.registerListener();
                vm.$store.commit("incrementActiveSockets");
            }
            this.$emit("videoUpdate", obj);
            vm.showOverlay = false;
            vm.isLoading = false;
        },
        // Failed to join the chat room
        subscribeError(obj) {
            const vm = this as any;
            if (obj.id === vm.video.id) {
                vm.overlayMessage = obj.message;
                vm.isLoading = false;
                vm.showOverlay = true;
            }
        },
    },
    computed: {
        connected() {
            return this.$socket.connected;
        },
        showBlockChannelDialog: {
            get() {
                return this.selectedChannel;
            },
            set(val) {
                if (!val) this.selectedChannel = "";
            },
        },
    },
    watch: {
        liveTlLang(nw, old) {
            this.switchLanguage(nw, old);
        },
        connected(nw) {
            if (nw) {
                this.isLoading = false;
            }
        },
        liveTlShowVerified() {
            this.loadMessages(true);
        },
        liveTlShowModerator() {
            this.loadMessages(true);
        },
    },
    mounted() {
        if (this.$socket.connected) {
            this.tlJoin();
        } else {
            this.initSocket();
        }
        // Test string
        // setInterval(() => {
        //     const msg = {
        //         name: "test 1",
        //         message: "But it’s no Pokemon, it’s just a very hyped Tako. :_MMT:https://yt3.ggpht.com/vjsrafxnve6TZhRGbmoVEGpn8VWUAYoT_uin2tBO6R4hoFfAakNTE9V9TD8fq3cAp0ZO4jM03pI=w48-h48-c-k-nd It seems to be very hyped for tomorrow’s fashINA show… almost too hyped that it has barely sleep :_MMT:https://yt3.ggpht.com/vjsrafxnve6TZhRGbmoVEGpn8VWUAYoT_uin2tBO6R4hoFfAakNTE9V9TD8fq3cAp0ZO4jM03pI=w48-h48-c-k-nd ",
        //         timestamp: Date.now()
        //     };
        //     if (Math.abs(this.$refs.tlBody.scrollTop) <= 1) this.$refs.tlBody.scrollTo(0, 0);
        //     this.tlHistory.push(this.parseMessage(msg));
        // }, 1000)
    },
    beforeDestroy() {
        this.tlLeave();
    },
    methods: {
        toggleBlockName(name) {
            this.$store.commit("settings/toggleLiveTlBlocked", name);
        },
        registerListener() {
            this.$socket.client.on(`${this.video.id}/${this.liveTlLang}`, this.handleMessage);
        },
        unregisterListener() {
            this.$socket.client.off(`${this.video.id}/${this.liveTlLang}`, this.handleMessage);
        },
        handleMessage(msg) {
            // if no type, process as regular message
            if (!msg.type) {
                // ignore blocked channels, moderator and verified messages if disabled
                if (this.blockedNames.has(msg.name)) return;

                if (
                    msg.is_tl
                    || msg.is_vtuber
                    || msg.is_owner
                    || (msg.is_moderator && this.liveTlShowModerator)
                    || (msg.is_verified && this.liveTlShowVerified)
                ) {
                    if (Math.abs(this.$refs.tlBody.scrollTop) <= 15) this.$refs.tlBody.scrollTo(0, 0);
                    this.tlHistory.push(this.parseMessage(msg));
                    this.$emit("historyLength", this.tlHistory.length);
                }
                return;
            }
            switch (msg.type) {
                case this.MESSAGE_TYPES.UPDATE:
                    this.$emit("videoUpdate", msg);
                    break;
                case this.MESSAGE_TYPES.END:
                    this.overlayMessage = msg.message;
                    this.tlLeave();
                    break;
                case this.MESSAGE_TYPES.ERROR:
                    this.overlayMessage = "An unexpected error occured";
                    this.tlLeave();
                    break;
                default:
                    break;
            }
        },
        tlJoin() {
            if (!this.initSocket()) return;

            // Grab first load chat history
            this.loadMessages(true);

            // Another instance has already subscribed to this chat, just register listener
            if (this.$socket.client.listeners(`${this.video.id}/${this.liveTlLang}`).length > 0) {
                this.registerListener();
                this.success = true;
                this.$store.commit("incrementActiveSockets");
            } else {
                // Try to join chat room with specified language
                this.$socket.client.emit("subscribe", { video_id: this.video.id, lang: this.liveTlLang });
            }
        },
        tlLeave() {
            const vm = this as any;
            // only disconnect and derement socket if it succeeded
            if (vm.success) {
                vm.$store.commit("decrementActiveSockets");
                // Check if there's another listener depending on this subscription, unsub if not
                if (vm.$socket.client.listeners(`${this.video.id}/${this.liveTlLang}`).length <= 1) {
                    vm.$socket.client.emit("unsubscribe", { video_id: vm.video.id, lang: vm.liveTlLang });
                }
                vm.unregisterListener();
                vm.$store.dispatch("checkActiveSockets");
                // Reset for immediate reconnects
                vm.success = false;
            }
        },
        switchLanguage(newLang, oldLang) {
            // unsub from old langauge
            this.$socket.client.emit("unsubscribe", { video_id: this.video.id, lang: oldLang });
            this.$socket.client.off(`${this.video.id}/${oldLang}`, this.handleMessage);
            this.success = false;
            this.tlJoin();
        },
        initSocket() {
            // Disallow users from joining a chat room that doesn't exist yet
            // Backend will create a chatroom when it's 15 minutes before a stream
            if (
                this.video.status !== "live"
                && !dayjs().isAfter(dayjs(this.video.start_scheduled).subtract(15, "minutes"))
            ) {
                this.overlayMessage = this.$t("views.watch.chat.status.notLive");
                this.isLoading = false;
                this.showOverlay = true;
                return false;
            }
            this.isLoading = true;

            // Start the unified socket if it isn't already
            if (this.$socket.disconnected) {
                this.$socket.client.connect();
            }
            return true;
        },
    },
};
</script>

<style>
.v-overlay__content {
    text-align: center;
}

.tl-body {
    overflow-y: auto;
    overscroll-behavior: contain;
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column-reverse;
    line-height: 1.25em;
    letter-spacing: 0.0178571429em !important;
}

.tl-expanded {
    overscroll-behavior: auto !important;
    height: 75vh;
}

.tl-expanded > .tl-body {
    height: 75vh;
    width: 100%;
}

.tl-overlay {
    border: 1px solid rgba(65, 65, 65, 0.2) !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

</style>
