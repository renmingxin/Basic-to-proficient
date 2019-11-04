# Chrome DevTools功能
## Element（元素面板）
简介：检查和调试页面，调试DOM，调试CSS
+ 获取DOM
    1. 使用document.querySelectorAll()来获取DOM数组
    2. 点击一个dom元素可以在console控制台用（$0）获取到改dom
    3. 右击Dom然后 Copy -> Copy JS PATH
+ 在DOM中断点调试
    1. 属性修改时打断点：右击 break on -> attribute modifications
    2. 节点删除时打断点：右击 break on -> node removal
    3. 子树修改时打断点：右击 break on -> subtree modifications
    
## Console（控制台面板）
简介：调试JavaScript、查看Console.log日志、交互式代码调试

## Sources（源代码资源面板）
简介：调试Javascript页面源代码，进行断点调试代码
+ 在Sources面板底下的Snippets功能可以增加一些库和js代码片段辅助我们进行调试 New snippets ->输入片段名 ->在右侧输入代码 ->右击片段名run
+ 在Sources面板底下的Filesvstem功能可以直接加载文件,在里面修改的代码片段会覆盖加载本地的代码片段
## NetWork（网络面板）
简介：调试请求，了解页面静态资源分布，网页性能检测
+ 使用waterfall去排查每个request的请求时间
## Performance（性能面板）__高阶__
简介：查看页面性能细节，细粒度对网页载入进行性能优化
+ 
## Memory（内存面板） __高阶__
简介：Javascript CPU分析器，内存堆分析器

## Application（应用面板）
简介：查看&调试客户端存储，如Cookie，LocalStorage，SessionStorage等

## Security（安全面板） __高阶__
简介：查看页面安全及证书问题

## Audits __高阶__
简介：使用Google Lighthouse辅助性能分析，给出优化建议

