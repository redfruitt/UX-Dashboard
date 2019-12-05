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
                <div class="fit row no-wrap justify-around items-start content-start q-gutter-xl">
                  <div class="col-3">
                    <q-card class="rounded-borders shadow-7">
                      <q-list>
                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="primary" name="local_bar" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Bar XYZ</q-item-label>
                            <q-item-label caption>Have a drink.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="red" name="local_gas_station" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Gas Station</q-item-label>
                            <q-item-label caption>Fill your gas tank.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="amber" name="local_movies" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Cinema XYZ</q-item-label>
                            <q-item-label caption>Watch a movie.</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </div>
                  <div class="col-2">
                    <q-card class="rounded-borders shadow-7">
                      <q-list>
                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="primary" name="local_bar" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Bar XYZ</q-item-label>
                            <q-item-label caption>Have a drink.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="red" name="local_gas_station" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Gas Station</q-item-label>
                            <q-item-label caption>Fill your gas tank.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="amber" name="local_movies" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Cinema XYZ</q-item-label>
                            <q-item-label caption>Watch a movie.</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </div>
                  <div class="col-2">
                    <q-card class="rounded-borders shadow-7">
                      <q-list>
                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="primary" name="local_bar" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Bar XYZ</q-item-label>
                            <q-item-label caption>Have a drink.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="red" name="local_gas_station" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Gas Station</q-item-label>
                            <q-item-label caption>Fill your gas tank.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="amber" name="local_movies" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Cinema XYZ</q-item-label>
                            <q-item-label caption>Watch a movie.</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </div>
                  <div class="col-3">
                    <q-card class="rounded-borders shadow-7">
                      <q-list>
                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="primary" name="local_bar" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Bar XYZ</q-item-label>
                            <q-item-label caption>Have a drink.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="red" name="local_gas_station" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Gas Station</q-item-label>
                            <q-item-label caption>Fill your gas tank.</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section avatar>
                            <q-icon color="amber" name="local_movies" />
                          </q-item-section>

                          <q-item-section>
                            <q-item-label>Cinema XYZ</q-item-label>
                            <q-item-label caption>Watch a movie.</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </div>

                </div>
                <div class="fit row no-wrap justify-around items-start content-start q-gutter-xl q-pt-xl">
                  <div class="col-6">
                     <q-card class="rounded-borders shadow-7">
                      <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                    </q-card>
                  </div>
                  <div class="col-5">
                    <q-card class="rounded-borders shadow-7">
                      <vue-highcharts :options="resoptions"></vue-highcharts>
                    </q-card>
                  </div>
                </div>

              </q-tab-panel>

              <q-tab-panel name="refdata">

                Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="funds">

                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
              </q-tab-panel>
              <q-tab-panel name="parties">

                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
              </q-tab-panel>
              <q-tab-panel name="oa">

                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
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

export default {
  name: 'PageIndex',
  components: {
    VueHighcharts
  },
  data () {
    return {
      dummy: 1,
      tab: 'securities',
      dashboardtab: 'one',
      areaOptions: data.AreaData,
      resoptions: data.responsiveData
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
    }
  }
}
</script>

<style lang="sass">
.panel-bg
  background-color: #fafafa

</style>
