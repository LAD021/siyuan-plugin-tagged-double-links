import {Plugin} from "siyuan";

import TaggedDoubleLinksDock from "@/tagged-double-links.svelte"

export default class SiyuanPluginTaggedDoubleLinks extends Plugin {
    async onload() {
        console.log("Loading Siyuan-Plugin-Tagged-Double-Links.");

        this.addDock({
            config: {
                position: "RightBottom",
                size: {width: 200, height: 0},
                icon: "iconSaving",
                title: "标签反向链接",
            },
            data: {},
            type: "dock_tab",
            init: (dock) => {
                new TaggedDoubleLinksDock({
                    target: dock.element
                });
            }
        });

        console.log("Siyuan-Plugin-Tagged-Double-Links successfully loaded.")
    }

    async onLayoutReady() {
        console.log("Siyuan-Plugin-Tagged-Double-Links layout ready.")
    }
}