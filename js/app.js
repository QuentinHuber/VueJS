new Vue({
    el: '#app',
    data: {
        message: 'Salut les coupains',
        link: 'https://www.youtube.com/watch?v=XkgiXngcpWk&list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0&index=2',
        //title: 'on peut changer le nom directement'
        //success: true,
        cls: 'success',
        persons: ['Sebastien', 'Quentin', 'Paul', 'Hakim'],
    },
    methods: {
        close: function() {
            //this.message = "Fermé"
            this.success = false //Mettre this pour prendre tout le contenu vue
        },
        /*style: function() {
            if (this.success){
                return {background : 'green'}
            }
            else {
                return {background: 'red'} 
            }
            
        }*/
    }
})
