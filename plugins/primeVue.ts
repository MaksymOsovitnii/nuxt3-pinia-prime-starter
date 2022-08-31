import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import StyleClass from 'primevue/styleclass';
import Riple from 'primevue/ripple';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import MultiSelect from 'primevue/multiselect';
import Avatar from 'primevue/avatar';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';

export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.use(PrimeVue, { ripple: true });
     nuxtApp.vueApp.use(ToastService);
     // Components
     nuxtApp.vueApp.component('Toast', Toast);
     nuxtApp.vueApp.component('Dialog', Dialog);
     nuxtApp.vueApp.component('Button', Button);
     nuxtApp.vueApp.component('Divider', Divider);
     nuxtApp.vueApp.component('Calendar', Calendar);
     nuxtApp.vueApp.component('Card', Card);
     nuxtApp.vueApp.component('InputText', InputText);
     nuxtApp.vueApp.component('Dropdown', Dropdown);
     nuxtApp.vueApp.component('Password', Password);
     nuxtApp.vueApp.component('Checkbox', Checkbox);
     nuxtApp.vueApp.component('Tag', Tag);
     nuxtApp.vueApp.component('DataTable', DataTable);
     nuxtApp.vueApp.component('Column', Column);
     nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
     nuxtApp.vueApp.component('Row', Row);
     nuxtApp.vueApp.component('MultiSelect', MultiSelect);
     nuxtApp.vueApp.component('Avatar', Avatar);
     nuxtApp.vueApp.component('FileUpload', FileUpload);

     // Directives
     nuxtApp.vueApp.directive('styleclass', StyleClass);
     nuxtApp.vueApp.directive('ripple', Riple);
});
