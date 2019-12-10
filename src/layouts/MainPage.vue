<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
         <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <!-- <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"> -->
          <img class="logo" src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-01.png">
          <!-- <q-img
            src="https://www.ivp.in/wp-content/uploads/2018/10/favicon.png"
          /> -->
           <span class="q-ml-sm">ProductUX</span>
        </q-toolbar-title>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">

          <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-linear-progress v-if="pushd == 1" indeterminate />
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">

        <q-item id="dashboard-cell" class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" :to="{ path: link.url }" clickable @click="showLoading">

            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>

          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item" v-ripple v-for="link in links2" :key="link.text" :to="{ path: link.url }" clickable @click="showLoading">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item" v-ripple v-for="link in links3" :key="link.text" :to="{ path: link.url }" clickable @click="showLoading">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

           <div class="q-mt-md">
            <div class="footer-container flex flex-center q-gutter-xs">
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Privacy">Privacy</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Terms">Terms</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="About">About IVP</a>
            </div>
          </div>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="main-container">
      <router-view @pushD="setPushD"/>
      <q-page-sticky position="bottom-right" :offset="[80, 20]">
          <q-btn id="chatButton" fab @click="chat('right')" icon="chat" color="primary" />
          <q-dialog v-model="showChat" :position="position">
           <div class="q-pt-xl q-pl-xl q-pr-xl row justify-center" style="background-color: white;">
              <div style="width: 500px; max-width: 80vw; height: 320px">
                <q-chat-message
                  name="me"
                  avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                  :text="[`I'm waiting for your answer..`]"
                  stamp="7 minutes ago"
                  sent
                  bg-color="amber-7"
                />
                <q-chat-message
                  name="Jane"
                  avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                  text-color="white"
                  bg-color="primary"
                >
                  <q-spinner-dots size="2rem" />
                </q-chat-message>
                <q-input class="q-pt-xl" bottom-slots v-model="chattext" label="Type"  :dense="dense">
                  <template v-slot:before>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                    </q-avatar>
                  </template>

                  <!-- <template v-slot:append>
                    <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                    <q-icon name="schedule" />
                  </template> -->

                  <!-- <template v-slot:hint>
                    Field hint
                  </template> -->

                  <template v-slot:after>
                    <q-btn round dense flat icon="send" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-dialog>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { QSpinnerBars } from 'quasar'

export default {
  name: 'GoogleNewsLayout',

  data () {
    return {
      chattext: 'I want to create a new security!',
      position: 'bottom-right',
      showChat: false,
      tourValue: false,
      pushd: 0,
      active: true,
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: '',
      hasWords: '',
      excludeWords: '',
      byWebsite: '',
      byDate: 'Any time',
      link: 'inbox',
      links1: [
        { icon: 'dashboard', text: 'Dashboard', url: '/' }
        // { icon: 'person', text: 'For you' },
        // { icon: 'star_border', text: 'Favourites' },
        // { icon: 'search', text: 'Saved searches' }
      ],
      links2: [
        { icon: 'search', text: 'Search', url: '/Search/' },
        { icon: 'create', text: 'Create', url: '/CreateSecurity/' },
        { icon: 'update', text: 'Update', url: '/Update/' },
        { icon: 'work', text: 'Manage Exceptions', url: '/ManageExceptions/' }
      ],
      links3: [
        { icon: 'notification_important', text: 'Monitor', url: '/StatusScreen/' },
        { icon: 'build', text: 'Config Manager', url: '/CM/' },
        { icon: 'supervised_user_circle ', text: 'Admin', url: '/Admin/' }
      ]
    }
  },

  methods: {
    setPushD (pushd) {
      this.pushd = pushd
    },
    showLoading () {
      this.$q.loading.show({
        spinner: QSpinnerBars,
        spinnerColor: 'orange'

      })

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
    },
    onClear () {
      this.exactPhrase = ''
      this.hasWords = ''
      this.excludeWords = ''
      this.byWebsite = ''
      this.byDate = 'Any time'
    },

    changeDate (option) {
      this.byDate = option
      this.showDateOptions = false
    },

    chat (position) {
      this.showChat = true
      this.position = position
    }
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
}
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    padding-left: 15%
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000

.footer-container
  padding-top: 150%

.selected-menu-item
  color: white
  background: $secondary

.body
  background-color: #c8ccdb

.logo
  max-height: 50px
  max-width: 100px

</style>
