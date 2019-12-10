<template>
  <q-page class="page-css">
  <q-pull-to-refresh @refresh="onRefresh">
   <div class="q-pa-xl">

      <div class="row">
          <div id="table" class="col">
            <q-table
              class="shadow-8 rounded-borders .my-sticky-header-column-table"
              :grid="grid"
              dense
              title="Downstream Post Grid"
              :data="data"
              :columns="columns"
              row-key="name"
              :selected-rows-label="getSelectedString"
              selection="multiple"
              :selected.sync="selected"
              :separator="separator"
              :filter="filter"
              :visible-columns="visibleColumns"
              :pagination.sync="pagination"
              :loading="loading"
              no-data-label="No data available to display"
              no-results-label="The filter didn't uncover any results"
              auto-width
            >

            <template v-slot:top="props">
               <q-space />
                <q-space />
                 <q-space />
               <q-btn push color="white" text-color="primary" label="Guide me" v-on:click.stop="startTour()" class="q-mr-md"/>

              <q-input rounded outlined dense debounce="300" v-model="filter" placeholder="Search" class="q-pr-md">
                <template v-slot:append>
                  <q-icon id="RowSearch" name="search" />
                </template>
              </q-input>

              <!-- <q-space /> -->
             <!-- <q-option-group
                v-model="separator"
                inline
                class="q-mb-md"
                :options="[
                  { label: 'Horizontal (default)', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                  { label: 'Cell', value: 'cell' },
                  { label: 'None', value: 'none' },
                ]"
              /> -->
              <!-- <q-btn label="Refresh" color="primary" @click="onRefresh" class="q-mb-md" /> -->

              <q-select
                v-model="visibleColumns"
                multiple
                rounded
                outlined
                dense
                class="q-pr-md"
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="columns"
                option-value="name"
                id="ColumnSelector"
              />
              <!-- <q-btn push @click="label=1" color="primary" round icon="card_giftcard" />
              <q-popup-edit v-model="label" style="max-width: 2%" content-class="bg-accent text-white">
                <q-input dark color="white" v-model="label" dense autofocus counter>
                  <template v-slot:append>
                    <q-icon name="edit" />
                  </template>
                </q-input>
              </q-popup-edit> -->
            </template>

            <template v-slot:no-data="{ icon, message, filter }">
              <div class="full-width row flex-center text-accent q-gutter-sm">
                <!-- <q-icon size="2em" name="warning" /> -->
                <span>
                  {{ message }}
                </span>
                <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
              </div>
            </template>

            <!-- <template v-slot:body="props">
              <q-tr :props="props">
                <q-td :props="props">

                </q-td>
                <q-td key="securityid" :props="props">
                  {{ props.row.securityid }}
                </q-td>
                <q-td key="securitytype" :props="props">
                  {{ props.row.securitytype }}
                </q-td>
                <q-td key="isactivesecurity" :props="props">
                  {{ props.row.isactivesecurity }}
                </q-td>
                <q-td key="system" :props="props">
                  {{ props.row.system }}
                </q-td>
                <q-td key="postingdate" :props="props">
                  {{ props.row.postingdate }}
                </q-td>
                <q-td key="postedby" :props="props">
                  {{ props.row.postedby }}
                </q-td>
                <q-td key="status" :props="props">
                  <q-badge color="green">
                    {{ props.row.status }}
                  </q-badge>
                </q-td>
                 <q-td key="log" :props="props">
                  {{ props.row.log }}
                </q-td>
              </q-tr>
            </template> -->

          </q-table>
          </div>
      </div>
   </div>
  </q-pull-to-refresh>
  </q-page>
</template>

<script>
import * as data from 'src/statics/tabledata.js'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

export default {
  data () {
    return {
      tourValue: false,
      label: '',
      grid: false,
      separator: 'cell',
      selected: [],
      loading: true,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 2,
        rowsPerPage: 20,
        loading: true
        // rowsNumber: xx if getting data from a server
      },
      filter: '',
      visibleColumns: ['securityid', 'securitytype', 'isactivesecurity', 'system', 'postingdate', 'status'],
      columns: data.tabularData.columns,
      data: data.tabularData.data

    }
  },

  mounted () {
    this.onRefresh()
    this.$nextTick(() => {

    })
  },

  methods: {

    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },

    startTour () {
      this.$nextTick(() => {
        const driver = new Driver()
        // Define the steps for introduction
        driver.defineSteps([
          {
            element: '#ColumnSelector',
            popover: {
              className: 'first-step-popover-class',
              title: 'Choose visible columns',
              description: 'You can select/deselect columns that should be visible within the grid.',
              position: 'left'
            }
          },
          {
            element: '#RowSearch',
            popover: {
              title: 'Search for columns',
              description: 'Returns queries rows that match the search clause',
              position: 'left'
            }
          },
          {
            element: '#table',
            popover: {
              title: 'Responsive Grid',
              description: 'The Grid is responsive and adjusts to various screen sizes.',
              position: 'left'
            }
          }
        ])

        driver.start()
      })
    },

    // emulate fetching data from server
    onRefresh (done) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        done()
      }, 3000)

      // this.$q.notify({

      //   message: 'Page Refreshed'

      // })
    }
  }
}
</script>
<style lang="sass">
.page-css
  background-color: #f3f3f7

.my-sticky-header-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  /* max height is important */
  .q-table__middle
    max-height: 100px

  td:first-child
    /* bg color is important for td; just specify one */
    //  background-color: #c1f4cd !important

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  tr:first-child th
    top: 0
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    background-color: 'white'
    /* highest z-index */
    z-index: 3
</style>
