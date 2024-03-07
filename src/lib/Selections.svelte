<script>
    import { setContext } from "svelte";
    import { Grid } from "@svelteuidev/core";
    import { NativeSelect, createStyles, Tabs } from "@svelteuidev/core";
    import { LocalHospital, School, DirectionsBus } from "@mui/icons-material";

    import Leaflet from "./Leaflet.svelte";
    import Navbar from "./Navbar.svelte";
    import Chart from "./Chart.svelte";
    import Child from "./Child.svelte";

    // import { selectedOption } from "../store/selectionStore";
    import { appState } from "../store/selectionStore";
    

    const useStyles = createStyles((theme) => ({
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "1em",

            "&.active": {
                backgroundColor: "#1480c1",
                color: "#fff",
                fontFamily: "Poppins",
                fontWeight: "bold",
            },
        },
    }));
    $: ({ classes } = useStyles());

    let options = ["", "Infrastructural", "Non-Infrastructural"];

    let selected;
    let selectedTab;
    let message = "Parent Message!";
    setContext('message', message);
    $: setContext('selectedParentTab', appState)
    $: setContext('selectedParentOption', appState)

    const handleTabChange = (event) => {
        // selectedOption.set(event.target.value ); //set the initial null value from the store to the new selected value
        console.log(event.detail);
        $appState.selectedTab = event.detail.key
        appState.update((state) => ({
            ...state,
       
            selectedTab: event.detail.key,
            // $: setContext('selectedParentTab', selectedTab)
        }));
    };

    const handleChange = (event) => {
        // Update the selectedOption property in the store
        $appState.selectedOption = event.target.value;
        appState.update((state) => ({
            ...state,
            selectedOption: event.target.value,
            // selectedTab: event.detail,
           
        }));
    };

    // Subscribe to changes in the selectedOption store
    //  selectedOption.subscribe(value => {
    //         selected = value;
    //     });

    appState.subscribe((state) => {
        selected = state.selectedOption;
        selectedTab = state.selectedTab
        
       
    });

</script>

<div class="selections">
    <Navbar />

    <Grid cols={24}>
        <Grid.Col span={5} style="background-color:#EFF1F2; margin-top:1em"
            ><NativeSelect
                style="margin: 1em"
                data={["Infrastructural", "Non-Infrastructural"]}
                placeholder="Select project type"
            />

            <div class="tabs_component">
                <Tabs variant="unstyled">
                    <Tabs.Tab
                        label="Hospital"
                        class={classes.root}
                        icon={LocalHospital}
                    />
                    <Tabs.Tab
                        label="School"
                        class={classes.root}
                        icon={School}
                    />
                    <Tabs.Tab
                        label="Bus Parks"
                        class={classes.root}
                        icon={DirectionsBus}
                    />
                </Tabs>


                <Child />
            </div>

          
        </Grid.Col>
        <Grid.Col span={5} style="background-color:#F8F8F8; margin-top:1em">
            <!-- <NativeSelect
                style="margin: 1em"
                data={["Infrastructural", "Non-Infrastructural"]}
                placeholder="Select project type"
            />

            -->

            <NativeSelect
                style="margin: 1em"
                data={["Infrastructural", "Non-Infrastructural"]}
                placeholder="Select project type"
                on:change={handleChange}
            />

            <div class="tabs_component">
                <Tabs variant="unstyled" on:change={handleTabChange}>
                    <Tabs.Tab
                    
                        label="Hospital"
                        tabKey="Hospital"
                        class={classes.root}
                        icon={LocalHospital}
                    />
                    <Tabs.Tab
                        label="School"
                        tabKey="School"
                        class={classes.root}
                        icon={School}
                    />
                    <Tabs.Tab
                        label="Bus Parks"
                        tabKey="Bus Parks"
                        class={classes.root}
                        icon={DirectionsBus}
                    />
                </Tabs>
            </div>
        </Grid.Col>
        <Grid.Col span={14}>
            <Leaflet />
            <!-- {#if selectedTab === 'School'} -->
            <div
                class="chart"
                style="display: flex; flex-direction:row; gap:'1em"
            >
                <Chart />
                <div style="display: flex; flex-direction:column; gap:'1em">
                    <p>Selected Category is: {selected}</p>
                    <p>Selected Tab is: {selectedTab}</p>
                </div>
            </div>
            <!-- {/if} -->
        </Grid.Col>
    </Grid>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    .selections {
        position: absolute;
        margin: 0;
        /* margin-top: 2vh; */
        z-index: 500;
        background-color: #fff;
        /* width:20vw; */
        font-family: Poppins;
    }
    .chart {
        width: 57vw;
        height: 40vh;
    }
    .tabs_component {
        /* height: 50%;
        width: 50%;
        background-color: antiquewhite; */
        padding: 1em;
        display: flex;
        flex-direction: column !important;
        gap: 2em;
    }
</style>
