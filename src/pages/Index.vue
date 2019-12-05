<template>
  <q-page>
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

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
              animated
              class="q-pt-xl panel-bg"
              transition-prev="scale"
              transition-next="scale"

            >
              <q-tab-panel name="securities">
                <div class="fit row no-wrap justify-start items-start content-start q-gutter-xl">
                  <div class="col-auto">
                    <q-card class="rounded-borders shadow-7">
                      <div class="q-pa-md">
                        <div class="q-pl-md text-h6">
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
                        <div class="q-pl-md text-h6">
                          Post Summary
                        </div>
                      </div>
                      <q-list class="q-pb-md">
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
                  <div class="col-auto">
                    <q-card class="rounded-borders shadow-7">
                      <div class="q-pa-md">
                        <div class="q-pl-md text-h6">
                          Data Exceptions
                        </div>
                      </div>
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Vendor Missing <q-chip color="primary" text-color="white" size="10px"> 16 </q-chip>
                              </q-chip>
                          </div>
                           <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                No Vendor Value <q-chip color="primary" text-color="white" size="10px"> 4088 </q-chip>
                              </q-chip>
                          </div>
                           <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Invalid Data <q-chip color="primary" text-color="white" size="10px"> 1024 </q-chip>

                              </q-chip>
                          </div>
                          <!-- <div class="col-auto">
                             <q-chip outline clickable @click="onClick" color="primary" text-color="white" size="16px" icon="">
                                Ref Data <q-chip color="primary" text-color="white" size="10px"> 546 </q-chip>
                              </q-chip>
                          </div> -->

                        </div>
                        <div class="row">
                          <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Underlying <q-chip color="primary" text-color="white" size="10px"> 12 </q-chip>
                              </q-chip>
                          </div>
                           <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Vendor Mismatch <q-chip color="primary" text-color="white" size="10px"> 5433 </q-chip>
                              </q-chip>
                          </div>
                           <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Value Changed <q-chip color="primary" text-color="white" size="10px"> 23 </q-chip>
                              </q-chip>
                          </div>
                          <!-- <div class="col-auto">
                             <q-chip outline clickable @click="onClick" color="primary" text-color="white" size="16px" icon="">
                                Validations NM
                              </q-chip>
                          </div> -->
                        </div>
                        <div class="row q-pb-md">
                          <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Geneva Mismatches <q-chip color="primary" text-color="white" size="10px"> 1132 </q-chip>
                              </q-chip>
                          </div>
                           <div class="col-auto">
                             <q-chip outline clickable @click="chipClick" color="primary" text-color="white" size="16px" icon="">
                                Anna Mismatches <q-chip color="primary" text-color="white" size="10px"> 5432 </q-chip>
                              </q-chip>
                          </div>
                           <!-- <div class="col-auto">
                             <q-chip size="16px" icon="">
                                Value Changed
                              </q-chip>
                          </div> -->
                          <!-- <div class="col-auto">
                             <q-chip size="16px" icon="">

                              </q-chip>
                          </div> -->
                        </div>
                      </div>

                    </q-card>
                    <q-dialog v-model="card">
                      <q-card style="max-width: 800px">
                        <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
                        <!-- <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg" />

                        <q-card-section>
                          <q-btn
                            fab
                            color="primary"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);"
                          />

                          <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">Cafe Basilico</div>
                            <div class="col-auto text-grey q-pt-md">
                              <q-icon name="place" /> 250 ft
                            </div>
                          </div>

                          <q-rating v-model="stars" :max="5" size="32px" />
                        </q-card-section>

                        <q-card-section>
                          <div class="text-subtitle1">$・Italian, Cafe</div>
                          <div class="text-subtitle2 text-grey">Small plates, salads & sandwiches in an intimate setting.</div>
                        </q-card-section>

                        <q-separator />

                        <q-card-actions>
                          <q-btn flat round icon="event" v-close-popup />
                          <q-btn flat v-close-popup>5:30PM</q-btn>
                          <q-btn flat v-close-popup>7:30PM</q-btn>
                          <q-btn flat v-close-popup>9:00PM</q-btn>
                          <q-btn flat color="primary" v-close-popup>Reserve</q-btn>
                        </q-card-actions> -->
                      </q-card>
                    </q-dialog>
                  </div>

                </div>
                <div class="fit row wrap justify-start items-start content-start q-gutter-xl q-pt-xl">
                  <div class="col-auto">
                    <!-- <div class="q-pa-md">
                        <div class="q-pl-md text-h6">
                          Portfolio
                        </div>
                    </div> -->

                     <q-card class="rounded-borders shadow-7 q-pl-xl q-pr-xl">
                        <!-- <q-card-section>
                          <div class="text-h6">
                          Portfolio
                          </div>
                        </q-card-section>
                        <q-card-section> -->
                      <!-- <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts> -->
                          <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
                         <!-- </q-card-section> -->
                    </q-card>
                  </div>

                  <div class="col-auto">
                    <q-card class="rounded-borders shadow-7">
                      <vue-highcharts :options="resoptions"></vue-highcharts>
                    </q-card>
                  </div>
                </div>

              </q-tab-panel>

              <q-tab-panel name="refdata">

                <div class="q-pa-md">
                  <q-card class="rounded-borders shadow-7">
                    <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                   </q-card>
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

Drilldown(Highcharts)
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
      card: false,
      dummy: 1,
      tab: 'securities',
      dashboardtab: 'one',
      areaOptions: data.AreaData,
      resoptions: data.responsiveData,
      pieOptions: data.PieData,
      Highcharts: Highcharts,
      drilldownOptions: data.DrilldownData
    }
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

.panel-bg {
  background-color: #fafafa
}

/* .highcharts-title {
  fill: 'black';
  font-weight: bold;
  font-family: 'roboto-font';
  /* letter-spacing: 0.3em; */
  /* font-size: 2em;

}  */

</style>
