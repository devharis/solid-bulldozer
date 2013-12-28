define(['backbone', 'underscore', 'jade!templates/account'], 
    function(Backbone, underscore, template){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.model = this.options.model;
        },
        //Events
        events: {
            'click .deleteAccount': 'deleteAccount'
        },
        //Render
        render: function(){
            //Render it in jade template
            this.$el.html(this.template({model: this.model}));   
            return this;
        },
        deleteAccount: function(){
            if(confirm("Are you sure? Deleting is permanent")) {
                this.model.destroy();

                //Flash message
                var success = new MessageView({ type: 'success', text: 'Account deleted successfully' });
                Backbone.history.navigate('accounts', {trigger:true});
            }
        }
    });
});