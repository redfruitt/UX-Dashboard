<template>
  <q-page class="page-css">
    <div class="q-pa-xl">
       <div class="dashboard-parent">
          <q-tabs
            v-model="tab"
            inline-label
            narrow-indicator
            class="text-grey"
            active-color="primary"
            indicator-color="primary"

          >
            <q-tab name="securities" label="Securities" />
            <q-tab name="refdata" label="Ref Data" />
            <q-tab name="funds" label="Funds" />
            <q-tab name="parties" label="Parties" />
            <q-tab name="oa" label="Operational Analytics" />
          </q-tabs>

          <div class="q-gutter-y-sm" style="background-color: #f3f3f7;">
            <q-tab-panels
              v-model="tab"
              animated
              class="q-pt-md page-css"
              transition-prev="fade"
              transition-next="fade"

            >
              <q-tab-panel name="securities">
                <div class="fit row wrap justify-start items-start content-start q-gutter-md page-css">
                  <div class="col-auto">
                    <q-card class="rounded-borders shadow-7">
                      <div class="q-pa-md">
                        <div id="securitychangestile" class="q-pl-md text-h6">
                          Security Changes
                        </div>
                        <q-list class="q-pt-md q-pl-xl q-pb-sm q-pr-xl">
                          <q-item>
                            <q-item-section avatar>
                              <q-icon color="primary" name="create" />
                            </q-item-section>

                            <q-item-section>
                              <q-item-label>Created</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-pl-xl">
                              <q-item-label class="text-positive">8119</q-item-label>
                            </q-item-section>
                          </q-item>

                          <q-item>
                            <q-item-section avatar>
                              <q-icon color="red" name="update" />
                            </q-item-section>

                            <q-item-section>
                              <q-item-label>Updated</q-item-label>
                              <!-- <q-item-label caption>Fill your gas tank.</q-item-label> -->
                            </q-item-section>
                            <q-item-section class="q-pl-xl">
                              <q-item-label class="text-purple">3631</q-item-label>
                            </q-item-section>
                          </q-item>

                          <q-item>
                            <q-item-section avatar>
                              <q-icon color="amber" name="delete" />
                            </q-item-section>

                            <q-item-section>
                              <q-item-label>Deleted</q-item-label>
                              <!-- <q-item-label caption>Watch a movie.</q-item-label> -->
                            </q-item-section>
                            <q-item-section class="q-pl-xl">
                              <q-item-label class="text-red">4578</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </div>
                    </q-card>
                  </div>
                  <div class="col-auto">
                    <q-card class="rounded-borders shadow-7">
                      <div class="q-pa-md">
                        <div id="postsummarytile" class="q-pl-md text-h6">
                          Post Summary
                        </div>
                      </div>
                      <q-list class="q-pb-md q-pl-sm q-pr-md">
                          <q-item>
                            <q-item-section class="q-pl-xl q-pr-xl" avatar>
                              <div class="row">
                                <div class="q-pl-xl">
                                </div>
                                <div class="col-auto">
                                  <q-icon style="font-size: 24px" color="positive" name="thumb_up" />
                                </div>
                                <div class="col-auto">
                                  <q-icon style="font-size: 24px" class="q-pl-xl" color="negative" name="thumb_down" />
                                </div>
                                <div class="col-auto">
                                  <q-icon style="font-size: 28px" class="q-pl-xl" color="orange" name="loop" />
                                </div>
                              </div>
                            </q-item-section>

                          </q-item>

                          <q-item>
                            <q-item-section class="q-pl-md q-pr-md" avatar>
                              <div class="row">
                                <div class="col-auto">
                                  <q-item-label>Geneva</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" color="positive" name="thumb_up" /> -->
                                  <q-item-label class="q-pl-xl text-positive">7</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" class="q-pl-xl" color="negative" name="thumb_down" /> -->
                                  <q-item-label class="q-pl-xl text-negative">1</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" class="q-pl-xl" color="orange" name="loop" /> -->
                                  <q-item-label class="q-pl-xl text-warning">0</q-item-label>
                                </div>
                              </div>

                            </q-item-section>
                          </q-item>
                           <q-item>
                            <q-item-section class="q-pl-md q-pr-md" avatar>
                              <div class="row">
                                <div class="col-auto">
                                  <q-item-label>Polaris</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" color="positive" name="thumb_up" /> -->
                                  <q-item-label class="q-pl-xl text-positive">9</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" class="q-pl-xl" color="negative" name="thumb_down" /> -->
                                  <q-item-label class="q-pl-xl text-negative">0</q-item-label>
                                </div>
                                <div class="col-auto">
                                  <!-- <q-icon style="font-size: 22px" class="q-pl-xl" color="orange" name="loop" /> -->
                                  <q-item-label class="q-pl-xl text-warning">0</q-item-label>
                                </div>
                              </div>

                            </q-item-section>
                          </q-item>

                        </q-list>
                    </q-card>
                  </div>
                  <div class="col-grow">
                    <q-card class="rounded-borders shadow-7">
                      <div class="q-pa-md">
                        <div class="q-pl-md q-pb-md text-h6">
                          Data Exceptions
                        </div>
                      </div>
                      <div class="fit row q-pl-md q-pb-sm q-gutter-xs justify">

                        <div class="col-grow q-pl-xl">
                          <div class="q-pl-md text-h8">
                            <q-badge color="blue">
                              Value Changed
                            </q-badge>
                          </div>
                           <div class="q-gutter-xs">
                              <q-knob
                                readonly
                                v-model="excep2"
                                show-value
                                size="90px"
                                :thickness="0.22"
                                color="lime"
                                track-color="lime-3"
                                class="text-lime q-ma-md"
                              />
                               <q-btn dense color="primary" round icon="bar_chart" class="q-ml-md" @click="chipClick">
                                <!-- <q-badge color="red" floating>4</q-badge> -->
                              </q-btn>

                          </div>
                        </div>
                         <div class="col-grow">
                          <div class="q-pl-md text-h8">
                            <q-badge color="blue">
                              Vendor Mismatch
                            </q-badge>
                          </div>
                         <div class="q-gutter-xs q-pb-xs">
                              <q-knob
                                readonly
                                v-model="excep1"
                                show-value
                                size="90px"
                                :thickness="0.22"
                                color="orange"
                                track-color="orange-3"
                                class="text-orange q-ma-md"
                              />
                              <q-btn dense color="primary" round icon="bar_chart" class="q-ml-md" @click="chipClick">
                                <!-- <q-badge color="red" floating>4</q-badge> -->
                              </q-btn>

                          </div>
                        </div>
                         <!-- <div class="col-grow">
                          <div class="q-pl-md text-h8">
                            Value Changed
                          </div>
                          <q-knob
                            readonly
                            v-model="value"
                            show-value
                            size="90px"
                            :thickness="0.22"
                            color="orange"
                            track-color="orange-3"
                            class="text-orange q-ma-md"
                          />
                        </div> -->
                      </div>

                    </q-card>
                    <q-dialog v-model="card">
                      <q-card style="max-width: 800px">
                        <!-- <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts> -->
                        <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
                      </q-card>
                    </q-dialog>
                  </div>

                </div>
                <div class="fit row wrap justify-start items-start content-start q-gutter-md q-pt-md">
                  <div class="col-auto">

                     <q-card class="rounded-borders shadow-7 q-pl-xl q-pr-xl">

                          <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
                    </q-card>
                  </div>

                  <div class="col-grow">
                    <q-card class="rounded-borders shadow-7">
                      <vue-highcharts :options="resoptions"></vue-highcharts>
                      <!-- <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts> -->
                    </q-card>
                  </div>
                </div>

              </q-tab-panel>

              <q-tab-panel name="refdata">

                <div class="q-pa-md">
                  <q-card class="rounded-borders shadow-7">
                    <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                   </q-card>

                  <!-- <q-card class="rounded-borders shadow-7">
                   <vue-highcharts
                      :options="threeDOptions"
                      :highcharts="Highcharts"
                    ></vue-highcharts>
                  </q-card> -->
                </div>
              </q-tab-panel>

              <q-tab-panel name="funds">

                <div class="q-pa-md">
                  <q-card class="rounded-borders shadow-7">
                    <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                   </q-card>
                </div>
              </q-tab-panel>
              <q-tab-panel name="parties">

                <div class="q-pa-md">
                  <q-card class="rounded-borders shadow-7">
                    <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                   </q-card>
                </div>
              </q-tab-panel>
              <q-tab-panel name="oa">

                <div class="q-pa-md">
                  <q-card class="rounded-borders shadow-7">
                    <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                   </q-card>
                </div>
              </q-tab-panel>
            </q-tab-panels>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="fade"
              transition-next="fade"
              class="bg-orange text-white text-center"
            >
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
              </q-tab-panel>
            </q-tab-panels>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="bg-teal text-white text-center"
            >
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>

    </div>
  </q-page>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import * as data from 'src/statics/data.js'
import Drilldown from 'highcharts/modules/drilldown.js'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

Drilldown(Highcharts)
Highcharts3D(Highcharts)

Highcharts.setOptions({
  lang: {
    drillUpText: 'Back'
  }
  // chart: {
  //   styledMode: true
  // }
})

export default {
  name: 'PageIndex',
  components: {
    VueHighcharts
  },
  data () {
    return {
      excep1: 78,
      excep2: 13,
      card: false,
      dummy: 1,
      tab: 'securities',
      dashboardtab: 'one',
      areaOptions: data.AreaData,
      resoptions: data.responsiveData,
      pieOptions: data.PieData,
      Highcharts: Highcharts,
      drilldownOptions: data.DrilldownData,
      threeDOptions: data.threeDData
    }
  },

  mounted () {
    this.onRefresh()
    this.$nextTick(() => {
      const driver = new Driver()

      // Define the steps for introduction
      driver.defineSteps([
        {
          element: '#securitychangestile',
          popover: {
            className: 'first-step-popover-class',
            title: 'Security Changes',
            description: 'Security Changes',
            position: 'top'
          }
        },
        {
          element: '#postsummarytile',
          popover: {
            title: 'Post Summary',
            description: 'Post Summary',
            position: 'top'
          }
        }
        // {
        //   element: '#GridStyle',
        //   popover: {
        //     title: 'GridStyle',
        //     description: 'GridStyle',
        //     position: 'top'
        //   }
        // }
      ])

      // Start the introduction
      driver.start()
    })
  },

  methods: {
    refresh (done) {
      setTimeout(() => {
        this.dummy += 1
        this.dashboardtab = 'one'
        this.areaOptions = data.AreaData
        this.resoptions = data.responsiveData
        done()
      }, 1000)
    },

    chipClick () {
      this.card = true
    }
  }
}
</script>

<style>
/* @import 'https://code.highcharts.com/css/highcharts.css'; */

/* .panel-bg {
  background-color: #fafafa
} */

.dashboard-parent {
  background-color: #f3f3f7;
}
.page-css {
  background-color: #f3f3f7;
}

#postsummarytile {
  padding-bottom: 10px;
}

/* .highcharts-title {
  fill: 'black';
  font-weight: bold;
  font-family: 'roboto-font';
  /* letter-spacing: 0.3em; */
  /* font-size: 2em;

}  */

</style>
