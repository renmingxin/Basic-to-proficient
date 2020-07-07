<template>
    <div>
        <transition-group tag="div" class="container">
            <div
                class="item"
                v-for="(item,index) in items"
                :key="item.key"
                :style="{background:'red',width:'80px',height:'80px'}"
                draggable="true"
                @dragstart="handleDragStart($event, item)"
                @dragover.prevent="handleDragOver($event, item)"
                @dragenter="handleDragEnter($event, item)"
                @dragend="handleDragEnd($event, item)"
            >{{item.key}}</div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data() {
        return {
            items: [
                { key: 1, color: '#ffebcc' },
                { key: 2, color: '#ffb86c' },
                { key: 3, color: '#f01b2d' },
                { key: 4, color: '#ffebcc' },
                { key: 5, color: '#ffb86c' },
                { key: 6, color: '#f01b2d' },
                { key: 7, color: '#ffebcc' },
                { key: 8, color: '#ffb86c' },
                { key: 9, color: '#f01b2d' }
            ],
            dragging: null
        }
    },
    methods: {
        handleDragStart(e, item) {
            // console.log(e,item)
            this.dragging = item;
        },
        handleDragEnd(e, item) {
            // console.log(e.item)
            this.dragging = null
        },
        //首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver(e) {
            e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
        },
        handleDragEnter(e, item) {
            e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
            if (item === this.dragging) {
                return
            }
            console.log(this.dragging.key ,item.key)
            console.log(this.items)
            let arr = [],a = this.dragging.key,b = item.key;
            for (const item of this.items) {
                arr.push(item.key)
            }
            console.log(arr,a,b);
            let indexa,indexb;
            this.items.forEach((ele,index)=>{
                if(ele.key === a){
                    console.log(index)
                    indexa = index;
                }
                if(ele.key === b){
                    console.log(index)
                    indexb = index;
                }
            })
            let bb = this.swapArr(this.items,indexa,indexb);
            console.log(bb);
            this.items = bb;
            // const newItems = [...this.items]
            // console.log(newItems)
            // const src = newItems.indexOf(this.dragging)
            // const dst = newItems.indexOf(item)

            // newItems.splice(dst, 0, ...newItems.splice(src, 1))

            // this.items = newItems
            
        },
        swapArr(arr, index1, index2) {
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
        }
    }
}
</script>


<style scoped>
.container {
    width: 500px;
    height: 300px;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    border: 1px solid red;
    padding: 0;
}
.item {
    margin-top: 10px;
    margin-right: 10px;
    transition: all linear 0.3s;
    cursor: move;
}
</style>
