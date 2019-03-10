new Vue({
    el: '#home',
    data() {
        return {
            search: '',
            opened: '',
            items: [
                {
                    name: 'john',
                    age: '34',
                    book: 'The last Emperor',
                    date: '2018-12-23'
                },
                {
                    name: 'garret',
                    age: '58',
                    book: 'One to one',
                    date: '2018-08-23'
                },
                {
                    name: 'Piter',
                    age: '14',
                    book: 'Goasts',
                    date: '2012-12-23'
                },
                {
                    name: 'Jack',
                    age: '54',
                    book: 'The last Emperor',
                    date: '2018-12-23'
                },
                {
                    name: 'john',
                    age: '34',
                    book: 'Goasts',
                    date: '2018-11-23'
                },
                {
                    name: 'Lukas',
                    age: '34',
                    book: 'The last Emperor',
                    date: '2018-11-23'
                },
                {
                    name: 'john',
                    age: '34',
                    book: 'The last Emperor',
                    date: '2018-12-23'
                },
                {
                    name: 'john',
                    age: '34',
                    book: 'The last Emperor',
                    date: '2018-12-23'
                },
                {
                    name: 'john',
                    age: '34',
                    book: 'The last Emperor',
                    date: '2018-12-23'
                }
            ],
            filters: [{open: false, val: '', name: 'name'}, {open: false, val: '', name: 'age'}, {open: false, val: '', name: 'book'}]
        }
    },
    methods: {
        openFilter(filter) {
            this.filters = this.filters.map(filt => {
                 filt.name === filter ? filt.open = !filt.open : filt.open=false;
                 return filt;
            });
        },
        onSubmit() {
            let key = this.opened;
            this.filters.forEach(filt => {
                filt[key]= this.search;
            });
        }
    },
    computed:{
        filtered() {

            return this.items.filter(item => {
                // return item.name.includes(this.filters[0].val) && item.age.includes(this.filters[1].val) && item.book.includes(this.filters[2].val)
                let result = []
                this.filters.forEach(filt => {
                    result.push(item[filt.name].includes(filt.val));
                })
                return result.every(item => item)
            })
        }
    }
});
