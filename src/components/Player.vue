<template>
<div>
    <video-player class="vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"
                  @ready="playerReadied"
                  @statechanged="playerStateChanged($event)">
  </video-player>
  <button @click="handleClick">Seek 10</button>
</div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
    name: 'VueVideoPlayer',
     props: {
      exposed: Object
    },
    data() {
      return {
        // videojs options
        playerOptions: {
          height: '360',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        },
        currentTime: 0
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        //this.player.muted(false)
        this.player.pause()
      }, 2000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    watch: {
      currentTime: {
            handler: function(t) {
              const time = t; //this.player.currentTime();
              console.log('time', time);
              this.$emit('exposed', time);
            }
          },
      exposed: function(t) {
        console.log('exposed', t);
        this.currentTime = t;
        this.player.currentTime(t);
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.play()
        player.currentTime(10)
        player.pause()
        player.currentTime(15)
        player.pause()
        // console.log('example 01: the player is readied', player)
        this.$emit('exposed', this.player.currentTime());
      },
      handleClick() {
        console.log('Button clicked');
        var whereYouAt = this.player.currentTime();
        console.log(whereYouAt);
        // set
        var new_time = whereYouAt + 2.0;
        this.player.currentTime(new_time); // 2 minutes into the video
        this.$emit('exposed', new_time);
      }
    }
	}
</script>
<style scoped>
.myslider.no-padding {
  padding: 0;
}
</style>