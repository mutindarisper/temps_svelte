<script lang="ts">
    import { Grid } from "@svelteuidev/core";
    import { NativeSelect, createStyles, Tabs } from "@svelteuidev/core";
    import { LocalHospital, School, DirectionsBus } from "@mui/icons-material";

    import Leaflet from "./Leaflet.svelte";
    import Navbar from "./Navbar.svelte";
    import Chart from "./Chart.svelte";

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
</script>

<div class="selections">
    <Navbar />

    <Grid cols={24}>
        <Grid.Col span={5}  style='background-color:#EFF1F2; margin-top:1em'
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
            </div>
        </Grid.Col>
        <Grid.Col span={5} style='background-color:#F8F8F8; margin-top:1em'>
            <NativeSelect
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
            </div>
        </Grid.Col>
        <Grid.Col span={14}>
            <Leaflet />
            <div class="chart">
                <Chart />
            </div>
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
