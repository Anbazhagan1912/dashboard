<template>
    <div style="padding: 10px;  background:aliceblue; height: 100vh;">
        <p style="font-size: 22px" class="font-weight-bold">DashBoard</p>
        <!-- <button @click="fetchData()">Fetch Data</button> -->
        <v-row>
            <v-col cols="12" md="6" lg="5">
                
                <div style="height: 220px;     background: linear-gradient(to right, #2193b0, #6dd5ed);  color: #fff;" class="dashboard-item d-flex justify-start  align-start ">
                     <div class="h-100 mr-10 "> <Doughnut :data="data" :options="options"  /></div>
                 <div>
                    <v-row>
                        <v-col cols="12" lg="12" style="position: relative;">
                            <v-menu style="position: absolute;">
                            <template v-slot:activator="{ props }">
                              <!-- <v-clip  v-bind="props"  color="primary">Today</v-clip> -->
                              <v-btn color="white" variant="tonal" style="border-radius: 20px; cursor: pointer; position: absolute; right:5%; font-size: 10px;"  v-bind="props">Today</v-btn>
                             </template>
                          <v-list>
                       <v-list-item>
                              <v-list-item-title>hi</v-list-item-title>
                       </v-list-item>
                           </v-list>
                         </v-menu>
                            <div class="d-flex justify-center">
                                <div style="height: 40px;  width: 40px; border-radius: 5px; " class="bg-purple-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="20">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="">Total Students</p>
                                    <p style="font-size: 16px;" class="font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                    </v-row>
                    <!-- <hr> -->
                    <v-row>
                        <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-blue-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center" style="font-size: 12px;">Total Boys</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-green-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center" style="font-size: 12px;">Total Girls</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px; " class="bg-green-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center " style="font-size: 12px; ">Total Precents</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-red-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center " style="font-size: 12px">Total Absents</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                    </v-row>
               </div>
                </div>
            </v-col>
                 <v-col cols="12" md="6" lg="5">
                
                <div style="height: 220px;     background: linear-gradient(to right, #ffafbd, #ffc3a0);  color:#fff" class="dashboard-item d-flex justify-start  align-start">

                     <div class="h-100 mr-10 "> <Doughnut :data="data"  /></div>
               <div>
                    <v-row>
                        <v-col cols="12" lg="12" style="position: relative;">
                            
                            <div class="d-flex justify-center">
                                <v-menu style="position: absolute;">
                            <template v-slot:activator="{ props }">
                              <!-- <v-clip  v-bind="props"  color="primary">Today</v-clip> -->
                              <v-btn color="#fff" variant="tonal" style="border-radius: 20px; cursor: pointer; position: absolute; right:5%; font-size: 10px;"  v-bind="props">Today</v-btn>
                             </template>
                          <v-list>
                       <v-list-item>
                              <v-list-item-title>hi</v-list-item-title>
                       </v-list-item>
                           </v-list>
                         </v-menu>

                                <div style="height: 40px;  width: 40px; border-radius: 5px; " class="bg-purple-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="20">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="">Total Stafs</p>
                                    <p style="font-size: 16px;" class="font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                    </v-row>
                    <!-- <hr> -->
                    <v-row>
                        <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-blue-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center" style="font-size: 12px;">Total Boys</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-green-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center" style="font-size: 12px;">Total Girls</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px; " class="bg-green-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center " style="font-size: 12px; ">Total Precent</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                         <v-col cols="12" lg="6">
                             <div class="d-flex">
                                <div style="height: 40px; width: 40px; border-radius: 5px;  " class="bg-red-lighten-1 d-flex justify-center align-center">
                                 <v-icon  size="16">mdi-account-group</v-icon>
                                </div>
                                 <div class="ml-2">
                                    <p class="text-center " style="font-size: 12px">Total Absent</p>
                                    <p style="font-size: 12px;" class=" font-weight-medium">10.000 </p>
                                 </div>
                            </div>
                        </v-col>
                    </v-row>
               </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="2">
                <div class="dashboard-item " style="height: 150px; color: #fff;  background: linear-gradient(to right, #d66d75, #e29587); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
">
                    <p class="text-h6   ">Total Visiters</p>
                    <p class="text-h5 font-weight-bold mt-2">120</p>
                    <v-chip
                    style="font-size: 12px;"
                    class="mt-2"
                    close-icon="mdi-delete"
                    color="white"
                    filter
                    >Today</v-chip>
                </div>
            </v-col>
           
            <v-col cols="12" md="6" lg="6" style="position: relative;">
              <div class="dashboard-item d-flex flex-column" style="   background: linear-gradient(to right, #ffe259, #ffa751); color: #fff; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
">
                 <v-menu style="position: absolute; ">
                            <template v-slot:activator="{ props }">
                              <!-- <v-clip  v-bind="props"  color="primary">Today</v-clip> -->
                              <v-btn color="white" variant="tonal" style="border-radius: 20px; cursor: pointer; position: absolute; right:5%; font-size: 10px;"  v-bind="props">Today</v-btn>
                             </template>
                          <v-list>
                       <v-list-item>
                              <v-list-item-title>hi</v-list-item-title>
                       </v-list-item>
                           </v-list>
                         </v-menu>
                <p class="text-h6">Expencess</p>
                <p>Total 48.5% Expences this month</p>
                <v-row>
                    <v-col cols="12" lg="3">
                         <div class="mt-6  d-flex">
                         <div style="width: 70px; height: 70px; " class=" icon-container bg-red-lighten-1 d-flex justify-center align-center">
                               <v-icon size="28px" >mdi-food-apple</v-icon>
                         </div>
                            <div class="ml-2 d-flex flex-column justify-start align-start  " style="width: 120px; height: 70px;">
                                <p style="font-size: 13px;color:#fff" class="mt-2">Food Expance</p>
                                <p class="font-weight-bold " style="font-size: 16px;">100Kg</p>
                        </div>
                    </div>
                    </v-col>
                    <v-col cols="12" lg="3">
                        <div class="mt-6  d-flex ">
                             <div style="width: 70px; height: 70px; " class="  icon-container bg-green-lighten-1 d-flex justify-center align-center">
                                    <v-icon size="28px">mdi-water</v-icon>
                             </div>
                                <div class="ml-2 d-flex flex-column justify-start align-start  " style="width: 120px; height: 70px;">
                                    <p style="font-size: 13px;color:#fff" class="mt-2">Raw Water Expence </p>
                                    <p class="font-weight-bold " style="font-size: 16px;">100 li</p>
                            </div>
                        </div>
                        </v-col >
                         <v-col cols="12" lg="3">
                          <div class="mt-6  d-flex ">
                             <div style="width: 70px; height: 70px; " class="  icon-container bg-blue-lighten-1 d-flex justify-center align-center">
                                    <v-icon size="28px">mdi-water</v-icon>
                             </div>
                                <div class="ml-2 d-flex flex-column justify-start align-start  " style="width: 120px; height: 70px;">
                                    <p style="font-size: 13px;color:#fff" class="mt-2">Water Expence </p>
                                    <p class="font-weight-bold " style="font-size: 16px;">100 li</p>
                            </div>
                        </div>
                        </v-col>
                        <v-col cols="12" lg="3">
                        <div class="mt-6  d-flex ">
                             <div style="width: 70px; height: 70px; " class=" icon-container bg-yellow-lighten-1 d-flex justify-center align-center">
                                    <v-icon color="#fff"  size="28">mdi-flash</v-icon>
                             </div>
                                <div class="ml-2 d-flex flex-column justify-start align-start  " style="width: 120px; height: 70px;">
                                    <p style="font-size: 13px;color:#fff" class="mt-2">Electice Expence</p>
                                    <p class="font-weight-bold " style="font-size: 16px;">100 kv</p>
                            </div>
                        </div>
                        </v-col>
                </v-row>
                
                    
               
                
              </div>
                
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <div class="dashboard-item position-relative"  style=" height: 400px; margin-bottom: -200px;   background: linear-gradient(to right, #b993d6, #8ca6db); color:#fff">
                    <v-menu style="position: absolute; ">
                        <template v-slot:activator="{ props }">
                            <v-btn color="#fff" variant="tonal" style="border-radius: 20px; cursor: pointer; position: absolute; right:5%; font-size: 10px;"  v-bind="props">Today</v-btn>
                            </template>
                        <v-list>
                       <v-list-item>
                            <v-list-item-title>hi</v-list-item-title>
                       </v-list-item>
                           </v-list>
                        </v-menu>
                <p class="mb-1" style="font-size: 14px;">Events</p>
                <div style="    color: azure; border-radius: 10px;" class="px-2 py-2 mt-6">
                    <div class="d-flex justify-lg-space-between mt-2 ">
                        <p style="font-size: 12px;">B.E computer Science</p>
                        <p style="font-size: 12px;">12.30pm</p>
                    </div>
                    <div>
                        <p style="font-size: 14px;" class="mt-2">Mrs.Anbu</p>
                    </div>
                </div>
                <div style="color: azure; border-radius: 10px;" class="px-2 py-2 mt-2">
                    <div class="d-flex justify-lg-space-between mt-2 ">
                        <p style="font-size: 12px;">B.E computer Science</p>
                        <p style="font-size: 12px;">12.30pm</p>
                    </div>
                    <div>
                        <p style="font-size: 14px;" class="mt-2">Mrs.Anbu</p>
                    </div>
                </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="3" >
                <div class="dashboard-item position-relative" style=" background: linear-gradient(to right, #eacda3, #d6ae7b); color: #fff; height: 400px;  margin-bottom: -200px;">
                      <v-menu style="position: absolute; ">
                        <template v-slot:activator="{ props }">
                            <v-btn color="white" variant="tonal" style="border-radius: 20px; cursor: pointer; position: absolute; right:5%; font-size: 10px;"  v-bind="props">Today</v-btn>
                            </template>
                        <v-list>
                       <v-list-item>
                            <v-list-item-title>hi</v-list-item-title>
                       </v-list-item>
                           </v-list>
                        </v-menu>
                    <p style="font-size: 14px;">IT Services</p>
                   <div style="border-radius: 10px; color: azure;" class="d-flex   px-2 py-2 justify-lg-space-between mt-5">
                     <div>
                        <p style="font-size: 12px;" class="mt-2">ITSIM</p>
                        <p class="mt-2">What is Your Name</p>
                    </div>
                    
                    <div>
                        <v-chip color="white"  style="font-size: 12px;">Complate</v-chip>
                        <p style="font-size: 12px;" class="mt-2">19/12/2000</p>
                    </div>
                   </div>
                    <div style="border-radius: 10px; color:azure" class="px-2 d-flex  py-2  justify-lg-space-between mt-2">
                     <div>
                        <p style="font-size: 12px;" class="mt-2">AO</p>
                        <p class="mt-2">What is Your Name</p>
                    </div>
                    
                    <div>
                        <v-chip color="white"  style="font-size: 12px;">pending</v-chip>
                        <p style="font-size: 12px;" class="mt-2">19/12/2000</p>
                    </div>
                   </div>
                </div>
            </v-col>
            <!-- <v-col cols="12" md="6" lg="6">
                <div class="dashboard-item" style="height: 200px;" >Dashboard Itwem 5</div>
            </v-col> -->
         
            <v-col cols="12" md="6" lg="6" style="height: 200px;">
               <v-row>
                <v-col cols="12" lg="3">
                    <div>
                         <div class="dashboard-item " style="height: 150px; background: linear-gradient(to right, #1d976c, #93f9b9); color: #fff;">
                    <p class="text-h6   ">Late Comers</p>
                    <p class="text-h5 font-weight-bold mt-2">120</p>
                    <v-chip
                    style="font-size: 12px;"
                    class="mt-2"
                    close-icon="mdi-delete"
                    color="white"
                    filter
                    >Today</v-chip>
                </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3">
                      <div>
                         <div class="dashboard-item " style="height: 150px; background: linear-gradient(to right, #4ac29a, #bdfff3); color: #fff;">
                    <p class="text-h6   ">Pubications</p>
                    <p class="text-h5 font-weight-bold mt-2">120</p>
                    <v-chip
                    style="font-size: 12px;"
                    class="mt-2"
                    close-icon="mdi-delete"
                    color="white"
                    filter
                    >Today</v-chip>
                </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3">
                     <div>
                    <div class="dashboard-item " style="height: 150px;  background: linear-gradient(to right, #74ebd5, #acb6e5); color: #fff;">
                    <p class="text-h6   ">Participation </p>
                    <p class="text-h5 font-weight-bold mt-2">10</p>
                    <v-chip
                    style="font-size: 12px;"
                    class="mt-2"
                    close-icon="mdi-delete"
                    color="white"
                    filter
                    >Today</v-chip>
                </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3">
                     <div>
                         <div class="dashboard-item " style="height: 150px;   background: linear-gradient(to right, #ffafbd, #ffc3a0); color: #fff;">
                    <p class="text-h6">On Duty</p>
                    <p class="text-h5 font-weight-bold mt-2">120</p>
                    <v-chip
                    style="font-size: 12px;"
                    class="mt-2"
                    close-icon="mdi-delete"
                    color="white"
                    filter
                    >Today</v-chip>
                </div>
                    </div>
                </v-col>

               </v-row>
            </v-col>


        </v-row>
    </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: "DashBoard",
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Doughnut
    },
    data() {    
        return chartConfig
    },

    methods:{
     async fetchData(){
            try{
                const responce = await axios.get()
                console.log(responce)
            }catch(err){
                console.log(err)
            }
        }
    }
}
   
</script>

<style >



.dashboard-item {
    /* background-color: azure; */
    /* border: 1px solid #ccc; */
    padding: 15px;
    /* margin-bottom: 10px; */
    /* height: 180px;   */
    border-radius: 10px;
    /* box-shadow: 5px 5px 100px #999; */
}

.icon-container{
    border-radius: 10px;
}
</style>
