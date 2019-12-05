<template>
  <q-page>
  <q-pull-to-refresh @refresh="onRefresh">
   <div class="q-pa-xl">

      <div class="row">
          <div class="col">
            <q-table
              class="my-sticky-header-column-table"
              dense
              title="Treats"
              :data="data"
              :columns="columns"
              row-key="name"
              :filter="filter"
              :visible-columns="visibleColumns"
              :pagination.sync="pagination"
              :loading="loading"
              selection="multiple"
              :selected.sync="selected"
              :separator="seperator"
              no-data-label="No data available to display"
              no-results-label="The filter didn't uncover any results"
            >

            <template v-slot:top="props">
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" class="q-pr-md">
                <template v-slot:append>
                  <q-icon id="RowSearch" name="search" />
                </template>
              </q-input>

              <q-space />
             <q-option-group
                v-model="separator"
                inline
                class="q-mb-md"
                :options="[
                  { label: 'Horizontal (default)', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                  { label: 'Cell', value: 'cell' },
                  { label: 'None', value: 'none' },
                ]"
              />
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
      separator: 'vertical',
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
      const driver = new Driver()

      // Define the steps for introduction
      driver.defineSteps([
        {
          element: '#ColumnSelector',
          popover: {
            className: 'first-step-popover-class',
            title: 'Column Selector',
            description: 'Column Selector',
            position: 'top'
          }
        },
        {
          element: '#RowSearch',
          popover: {
            title: 'RowSearch',
            description: 'RowSearch',
            position: 'top'
          }
        },
        {
          element: '#GridStyle',
          popover: {
            title: 'GridStyle',
            description: 'GridStyle',
            position: 'top'
          }
        }
      ])

      // Start the introduction
      // driver.start()
    })
  },
  methods: {
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
.my-sticky-header-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  /* max height is important */
  .q-table__middle
    // max-height: 200px

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
    /* highest z-index */
    z-index: 3
</style>
