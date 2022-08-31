<template>
     <div>
          <Head>
               <Title>Template</Title>
               <Meta name="description" content="Moving CRM" />
          </Head>
          <Body>
               <Toast />
               <div>
                    <NuxtLayout>
                         <NuxtPage />
                    </NuxtLayout>
               </div>
          </Body>
     </div>
</template>
setup

<script setup>
definePageMeta({
     layoutTransition: false,
     pageTransition: false
});
</script>
