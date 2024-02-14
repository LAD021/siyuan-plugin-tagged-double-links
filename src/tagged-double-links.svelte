<script lang="ts">
import {updateHotkeyTip} from "@/libs/from-siyuan";
import {sql} from "@/api";

async function searchBackLinks(id: string) {
    return await sql(`
        select * from blocks where id in (
            select block_id from refs where def_block_id = "${id}"
        );
    `)
}

console.log(searchBackLinks('20230915215308-4lphdrn'))
</script>

<div class="block__icons">
    <div class="block__logo">
        <svg class="block__logoicon"><use xlink:href="#iconLink"></use></svg>{window.siyuan.languages.backlinks}
    </div>
    <span class="counter listCount" style="margin-left: 0"></span>
    <span class="fn__flex-1"></span>
    <span class="fn__space"></span>
    <input class="b3-text-field search__label fn__none fn__size200" placeholder="{window.siyuan.languages.filterKeywordEnter}" />
    <span data-type="search" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.filter}"><svg><use xlink:href='#iconFilter'></use></svg></span>
    <span class="fn__space"></span>
    <span data-type="refresh" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.refresh}"><svg><use xlink:href='#iconRefresh'></use></svg></span>
    <span class="fn__space"></span>
    <span data-type="sort" data-sort="3" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.sort}"><svg><use xlink:href='#iconSort'></use></svg></span>
    <span class="fn__space"></span>
    <span data-type="expand" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.expand} {updateHotkeyTip(window.siyuan.config.keymap.editor.general.expand.custom)}">
        <svg><use xlink:href="#iconExpand"></use></svg>
    </span>
    <span class="fn__space"></span>
    <span data-type="collapse" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.collapse} {updateHotkeyTip(window.siyuan.config.keymap.editor.general.collapse.custom)}">
        <svg><use xlink:href="#iconContract"></use></svg>
    </span>
    <span class="{this.type === "local" ? "fn__none " : ""}fn__space"></span>
    <span data-type="min" class="{this.type === "local" ? "fn__none " : ""}block__icon b3-tooltips b3-tooltips__sw" aria-label="{window.siyuan.languages.min} {updateHotkeyTip(window.siyuan.config.keymap.general.closeTab.custom)}"><svg><use xlink:href='#iconMin'></use></svg></span>
</div>
<div class="backlinkList fn__flex-1"></div>
<div class="block__icons">
    <div class="block__logo">
        <svg class="block__logoicon"><use xlink:href="#iconLink"></use></svg>{window.siyuan.languages.mentions}
    </div>
    <span class="counter listMCount" style="margin-left: 0;"></span>
    <span class="fn__flex-1"></span>
    <span class="fn__space"></span>
    <input class="b3-text-field search__label fn__none fn__size200" placeholder="{window.siyuan.languages.filterKeywordEnter}" />
    <span data-type="search" class="block__icon b3-tooltips b3-tooltips__nw" aria-label="{window.siyuan.languages.filter}"><svg><use xlink:href='#iconFilter'></use></svg></span>
    <span class="fn__space"></span>
    <span data-type="mSort" data-sort="3" class="block__icon b3-tooltips b3-tooltips__nw" aria-label="{window.siyuan.languages.sort}"><svg><use xlink:href='#iconSort'></use></svg></span>
    <span class="fn__space"></span>
    <span data-type="mExpand" class="block__icon b3-tooltips b3-tooltips__nw" aria-label="{window.siyuan.languages.expand}">
        <svg><use xlink:href="#iconExpand"></use></svg>
    </span>
    <span class="fn__space"></span>
    <span data-type="mCollapse" class="block__icon b3-tooltips b3-tooltips__nw" aria-label="{window.siyuan.languages.collapse}">
        <svg><use xlink:href="#iconContract"></use></svg>
    </span>
    <span class="fn__space"></span>
    <span data-type="layout" class="block__icon b3-tooltips b3-tooltips__nw" aria-label="{window.siyuan.languages.down}">
        <svg><use xlink:href="#iconDown"></use></svg>
    </span>
</div>
<div class="backlinkMList fn__flex-1"></div>
