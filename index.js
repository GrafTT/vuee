new Vue({
  el: '#test',
  data() {
    return {
      items: [
        {main: ['111', 'bipparent', '2019-03-03', '222', '2'], details: ['111', 'bipparent', '2019-03-03', '222', '2', 'sbrb', 'no more'], show: false},
        {main: ['555', 'vtb', '2019-03-03', '222', '2'], details: ['55', 'prospparent', '2019-03-03', '222', '2'] , show: false},
        {main: ['43', 'sber', '2019-03-03', '222', '3'], details: ['35', 'bipparent', '2019-03-03', '222', '2'], show: false},
        {main: ['2561', 'alfe', '2019-03-03', '222', '3'], details: ['465', 'bipparent', '2019-03-03', '222', '2'], show: false},
        {main: ['78', 'tinkoff', '2019-03-03', '222', '4'], details: ['7761', 'bipparent', '2019-03-03', '222', '2'], show: false},
      ]
    }
  },
  computed: {
    det(n){
      return n;
    }
  }
})