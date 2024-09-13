const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmem91hp0s/",
            name: "ssmem91hp0s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmem91hp0s/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SSM的流浪动物救助系统的设计与实现"
        } 
    }
}
export default base
