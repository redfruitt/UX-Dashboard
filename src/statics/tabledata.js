export let tabularData = {
  columns: [
    {
      label: 'Security Id',
      required: true,
      name: 'securityid',
      align: 'left',
      field: 'securityid',
      format: val => `${val}`,
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      label: 'Security Type',
      align: 'left',
      name: 'securitytype',
      field: 'securitytype',
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      label: 'Is Active Security',
      name: 'isactivesecurity',
      field: 'isactivesecurity',
      align: 'left',
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      label: 'System',
      name: 'system',
      field: 'system',
      align: 'left',
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      label: 'Posting Date',
      name: 'postingdate',
      field: 'postingdate',
      align: 'left',
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      name: 'postedby',
      label: 'Posted By',
      field: 'postedby',
      align: 'left',
      headerClasses: 'bg-primary text-white',
      sortable: true
    },
    {
      name: 'status',
      label: 'Status',
      field: 'status',
      align: 'left',
      sortable: true,
      headerClasses: 'bg-primary text-white',
      sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
    },
    {
      name: 'log',
      label: 'Log',
      field: 'log',
      sortable: true,
      align: 'left',
      headerClasses: 'bg-primary text-white',
      sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
    }
  ],

  data: [
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Anna',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000735',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'false',
      system: 'VPM',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'COBO001062',
      securitytype: 'Corporate Bond',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/30/2019 03:17:55',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'REDE000054',
      securitytype: 'Real Estate Deal',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQOP00054',
      securitytype: 'Equity Options',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/27/2019 12:13:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQSA000142',
      securitytype: 'Equity Swap',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/25/2019 02:46:06',
      postedby: 'admin',
      status: 'FAILED',
      log: 'Invalid mapping defined'
    },
    {
      securityid: 'INSC000001',
      securitytype: 'Investment',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: 'Security Type not mapped'
    },
    {
      securityid: 'EQIN000111',
      securitytype: 'Equity Index',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'EQST028479',
      securitytype: 'Equity Common Stock',
      isactivesecurity: 'false',
      system: 'Anna',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Anna',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000735',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'false',
      system: 'VPM',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'COBO001062',
      securitytype: 'Corporate Bond',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/30/2019 03:17:55',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'REDE000054',
      securitytype: 'Real Estate Deal',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQOP00054',
      securitytype: 'Equity Options',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/27/2019 12:13:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQSA000142',
      securitytype: 'Equity Swap',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/25/2019 02:46:06',
      postedby: 'admin',
      status: 'FAILED',
      log: 'Invalid mapping defined'
    },
    {
      securityid: 'INSC000001',
      securitytype: 'Investment',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: 'Security Type not mapped'
    },
    {
      securityid: 'EQIN000111',
      securitytype: 'Equity Index',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'EQST028479',
      securitytype: 'Equity Common Stock',
      isactivesecurity: 'false',
      system: 'Anna',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Anna',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000735',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'false',
      system: 'VPM',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'COBO001062',
      securitytype: 'Corporate Bond',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/30/2019 03:17:55',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'REDE000054',
      securitytype: 'Real Estate Deal',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQOP00054',
      securitytype: 'Equity Options',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/27/2019 12:13:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQSA000142',
      securitytype: 'Equity Swap',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/25/2019 02:46:06',
      postedby: 'admin',
      status: 'FAILED',
      log: 'Invalid mapping defined'
    },
    {
      securityid: 'INSC000001',
      securitytype: 'Investment',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: 'Security Type not mapped'
    },
    {
      securityid: 'EQIN000111',
      securitytype: 'Equity Index',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'EQST028479',
      securitytype: 'Equity Common Stock',
      isactivesecurity: 'false',
      system: 'Anna',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000052',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'true',
      system: 'Anna',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: '1%'
    },
    {
      securityid: 'BAFA000735',
      securitytype: 'Bank Debt Global Facility',
      isactivesecurity: 'false',
      system: 'VPM',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'COBO001062',
      securitytype: 'Corporate Bond',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/30/2019 03:17:55',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'REDE000054',
      securitytype: 'Real Estate Deal',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '11/29/2019 02:43:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQOP00054',
      securitytype: 'Equity Options',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/27/2019 12:13:01',
      postedby: 'admin',
      status: 'PASSED',
      log: '1%'
    },
    {
      securityid: 'EQSA000142',
      securitytype: 'Equity Swap',
      isactivesecurity: 'true',
      system: 'Eze',
      postingdate: '11/25/2019 02:46:06',
      postedby: 'admin',
      status: 'FAILED',
      log: 'Invalid mapping defined'
    },
    {
      securityid: 'INSC000001',
      securitytype: 'Investment',
      isactivesecurity: 'false',
      system: 'Geneva',
      postingdate: '11/25/2019 02:43:01',
      postedby: 'admin',
      status: 'NOT PROCESSED',
      log: 'Security Type not mapped'
    },
    {
      securityid: 'EQIN000111',
      securitytype: 'Equity Index',
      isactivesecurity: 'true',
      system: 'CRD',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    },
    {
      securityid: 'EQST028479',
      securitytype: 'Equity Common Stock',
      isactivesecurity: 'false',
      system: 'Anna',
      postingdate: '9/25/2019 04:28:59',
      postedby: 'admin',
      status: 'SUCCESS',
      log: 'Posted Successfully'
    }

  ]
}
