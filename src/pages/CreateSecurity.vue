<template>
 <q-page class="page-css">
  <div class="q-pa-xl page-css">
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
      class="q-pa-xl"
    >
      <q-step
        :name="1"
        title="Choose a security type"
        icon="category"
        :done="step > 1"
      >
      <div class="q-gutter-md q-pa-xl">
        <q-select
          filled
          v-model="model"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options"
          @filter="filterFn"
          @filter-abort="abortFilterFn"
          style="width: 250px"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
       </div>
      </q-step>
      <q-step
        :name="2"
        title="Add or update security details"
        icon="create_new_folder"
        :done="step > 2"

      >
      <div class="q-gutter-y-md q-pa-xl">
         <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
          <q-card >
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="secmaster" label="Security Master" />
              <q-tab name="identifiers" label="Identifiers" />
              <q-tab name="refdata" label="Reference Data" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="secmaster">
                <div class="q-pa-md" style="max-width: 400px">

                    <q-input
                      filled
                      v-model="name"
                      label="Security Name"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Required']"
                    />

                    <q-input
                      filled
                      v-model="description"
                      label="Security Description"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Required']"
                    />

                    <!-- <q-input
                      filled
                      type="number"
                      v-model="age"
                      label="Your age *"
                      lazy-rules
                      :rules="[
                        val => val !== null && val !== '' || 'Please type your age',
                        val => val > 0 && val < 100 || 'Please type a real age'
                      ]"
                    /> -->

                    <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

                    <!-- <div>
                      <q-btn label="Save" type="submit" color="primary"/>
                      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div> -->

                </div>
              </q-tab-panel>

              <q-tab-panel name="identifiers">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="refdata">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>

        <q-stepper-navigation>

            <q-btn @click="step = 3" color="primary" label="Save and Continue"/>
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

        </q-stepper-navigation>
       </q-form>
      </div>
      </q-step>

      <!-- <q-step
        :name="3"
        title="Ad template"
        icon="assignment"
        disable
      >
        This step won't show up because it is disabled.
      </q-step> -->

      <q-step
        :name="3"
        title="Finishing up"
        icon="add_comment"
        :done="step > 3"
      >
      <div class="q-gutter-y-md q-pa-xl">
        All security details have been saved, how would you like to proceed?

        <q-stepper-navigation>

          <q-btn color="primary" label="Push Downstream" @click="alert = true" :loading="submitting">
            <template v-slot:loading>
              <q-spinner-bars
                color="white"
              />
            </template>
          </q-btn>
          <q-btn flat @click="onSubmit" color="primary" label="Just create security" class="q-ml-sm">

          </q-btn>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Choose Downstream system</div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn flat  @click="onPush" label="Geneva" color="orange" v-close-popup />
              <q-btn flat  @click="onPush" label="EZE" color="orange" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
      </q-step>

      <q-step
        :name="4"
        title="Success"
        icon="success"
      >
      <div class="q-pa-md">
        <!-- <q-card class="q-pa-xl"> -->
          Security has been created.

          <q-stepper-navigation>
            <q-btn color="primary" label="Go to Status Screen" to="/StatusScreen" @click="showLoading" />
            <q-btn flat @click="onRestartForm" color="primary" label="Create another security" class="q-ml-sm" />
          </q-stepper-navigation>
        <!-- </q-card> -->
      </div>
      </q-step>

    </q-stepper>
  </div>
 </q-page>
</template>

<script>
import { QSpinnerBars } from 'quasar'

const stringOptions = [
  'ABS', 'Equity Common Stock', 'Corporate Bond', 'Future', 'Option'
]

export default {
  data () {
    return {
      submitting: false,
      alert: false,
      name: null,
      description: null,
      tab: 'secmaster',
      step: 1,
      model: null,
      options: stringOptions
    }
  },

  mounted () {
    this.submitting = false
  },

  methods: {
    filterFn (val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow

      setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options = stringOptions
          } else {
            const needle = val.toLowerCase()
            this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
          }
        })
      }, 500)
    },

    abortFilterFn () {
      // console.log('delayed filter aborted')
    },

    onSubmit () {
      this.step = 4
      this.$q.notify({
        color: 'green-6',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Security was created successfully!'
      })
    },

    onPush () {
      this.submitting = true
      this.$emit('pushD', 1)
      setTimeout(() => {
        this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Security was created successfully!'
        })
      }, 3000)

      setTimeout(() => {
        this.$emit('pushD', 0)
        this.step = 4
        this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Security was pushed downstream successfully!'
        })
      }, 5000)
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },

    onRestartForm () {
      this.submitting = false
      this.step = 1
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
    }
  }
}
</script>
<style>
.page-css {
  background-color: #f3f3f7;
}
</style>
