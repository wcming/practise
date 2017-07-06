/**
 * Created by wang on 2017/7/6.
 */
var app = angular.module('myApp',[]);
//con1
app.controller('con1',function($scope){
    $scope.name = 'lili'
})
//con2
app.controller('con2',function($scope){
    $scope.name = 'mingming'
})
//con3
app.controller('con3',function($scope){
    $scope.arrs=[
        {
            firstName:"zhang",
            lastName:"san",
            sex:"man"
        },
        {
            firstName:"li",
            lastName:"si",
            sex:"woman"
        },
        {
            firstName:"wang",
            lastName:"wu",
            sex:"man"
        },
        {
            firstName:"zhao",
            lastName:"liu",
            sex:"woman"
        }
    ]
})
//con4
app.controller('con4',function($scope){
    $scope.action = '北京八维研修学院'
})
//con5
app.controller('con5',function($scope){
    $scope.file = 'red'
    $scope.files = true
})
//con6
app.controller('con6',function($scope){

})
//con7
app.controller('con7',function($scope){
    $scope.show=true
    $scope.showOrHide=function(){
        $scope.show = $scope.show ? false : true
    }
})
//con8
app.controller('con8',function($scope){
    $scope.hide=false
    $scope.hideOrShow=function(){
        $scope.hide = $scope.hide ? false : true
    }
})