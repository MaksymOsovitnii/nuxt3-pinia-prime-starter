<template>
     <div class="grid grid-nogutter justify-content-center align-content-center h-screen w-screen bg-black-alpha-90">
          <Card class="col-12 md:col-6 lg:col-4 bg-primary-reverse shadow-8">
               <template #title>
                    <h2 class="my-4 text-center text-color">Error happened</h2>
               </template>
               <template #content>
                    <div class="col-12 grid">
                         <div class="col-12">
                              <div class="text-color">
                                   <h5>Error Status Code</h5>
                                   <Button
                                        :label="error.statusCode"
                                        class="p-button-outlined p-button-danger"
                                        disabled
                                   />
                              </div>
                         </div>
                         <div class="col-12">
                              <div class="text-color">
                                   <h5>Error Details</h5>
                                   <Button :label="error.message" class="p-button-outlined p-button-danger" disabled />
                              </div>
                         </div>
                    </div>
                    <divider></divider>
                    <div class="col-12 grid"></div>
               </template>
          </Card>
     </div>
</template>

<script setup>
defineProps(['error']);
</script>
