/**
 * Created by yusuke_hosono on 2016/02/07.
 */
var Vue = require('vue');

Vue.component('dropzone-image-uploader', {

    template: '#dropzone',

    props: ['help'],

    data: function() {
        return {
            image: '',
            hovering:false
        };
    },

    methods: {
        onFileChange: function(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage: function(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = function(e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        }
    }
});
