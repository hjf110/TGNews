//接口地址 管理对象
// var path = "http://47.99.174.52:8083/kjcy";//接口头地址
var pass = "Qyw6tX4f";// 8位随机签名加密码


// var baseTextdoor ="http://47.99.174.52:8088/kjcy-device/";
//请求前缀



// 正式环境
var baseURL = "http://47.99.174.52:8083/kjcy/";
var baseURL_PDA = "http://47.99.174.52:8084/kjcy-pda/";
var baseURL_FWDT = "http://47.99.174.52:8085/kjcy-servicehall/";
var baseURL_KH = "http://47.99.174.52:8086/kjcy-customer/";
var baseURL_YS = "http://47.99.174.52:8087/kjcy-transport/";
var baseURL_CW = "http://47.99.174.52:8089/kjcy-finance/";
var filePath = "http://47.99.174.52:8082/kjcy-image/images/";


// //测试环境
// var baseURL = "http://115.238.154.91:8083/kjcy/";
// var baseURL_PDA = "http://115.238.154.91:8084/kjcy-pda/";
// var baseURL_FWDT = "http://115.238.154.91:8085/kjcy-servicehall/";
// var baseURL_KH = "http://115.238.154.91:8086/kjcy-customer/";
// var baseURL_YS = "http://115.238.154.91:8087/kjcy-transport/";
// var baseURL_CW = "http://115.238.154.91:8089/kjcy-finance/";
// var filePath = "http://115.238.154.91:8082/kjcy-image/images/";



//接口管理
var Api = {
    Log:false,//全局console的开启和关闭
    Type_Name: [//自定义类型
        {t: "type1", n: "客户单位类型"},//0
        {t: "type2", n: "运输单位类型"},//1
        {t: "type3", n: "库内流转类型"},//2
        {t: "type4", n: "客户指令费用类型"},//3
        // {t: "type5", n: "楼层类型"},
        // {t: "type5", n: "车位类型"},//4
        {t: "type6", n: "部门类型"},//5
        {t: "type7", n: "岗位类型"},//6
        {t: "type8", n: "职位类型"},//7
        // {t:"type5",n:"测试类型"},
    ],
    CW_receipt: {//收据模块
        list: baseURL_CW + "receive/list",//收据列表
        add: baseURL_CW + "receive/create",//收据创建
        update: baseURL_CW + "receive/update",//收据修改
        print: baseURL_CW + 'receive/print',//更改打印状态
        abandon: baseURL_CW + "receive/abandon",//废弃收据
    },
    CW_Bills: {//报表
        day: baseURL_CW + "daily/list",//日合计(报表)
        type: baseURL_CW + "anls/type",//类型统计(报表)
        cp: baseURL_CW + "anls/receiver",//按单位/个人统计(报表)
    },
    CW_Water: {//财务流水账单接口
        Update: baseURL_CW + "update",//更新流水表
        Add: baseURL_CW + "create",//添加流水账单
        List: baseURL_CW + "list",//财务账单列表
        Again: baseURL_CW + "recalcDaily",//重新生成合计
        Toaudit: baseURL_CW + "toaudit",//点击送审
        Audit: baseURL_CW + "audit",//通过审核
    },
    CW_Type: {
        bigAdd: baseURL_CW + "type/create",//大类创建
        bigList: baseURL_CW + "type/list",//大类列表
        smallAdd: baseURL_CW + "subtype/create",//小类创建
        smallList: baseURL_CW + "subtype/list",//小类列表
        delete_da: baseURL_CW + "/type/delete",//删除大类
        delete_xiao: baseURL_CW + "subtype/delete",//删除大类
    },
    KH_Child: {
        add: baseURL_KH + "subaccount/create",//创建子账号
        list: baseURL_KH + "subaccount/list",//子账号列表
        update: baseURL_KH + "subaccount/update",//编辑子账号
        select: baseURL_KH + "subaccount/info"//查询子账号的信息
    },
    //各种设备操作
    Open: {
        box: baseURL_FWDT + "checkin/openbox",//打开资料柜(入库)
        box2: baseURL_FWDT + "checkin/openbox2",//打开资料柜(出库)
        checkBox: baseURL_FWDT + "checkin/lockbox",//确认资料柜已打开(入库)
        checkBox2: baseURL_FWDT + "checkin/lockbox2",//确认资料柜已打开(出库)
        roadGate: baseURL_PDA + "deliverycar/opendoor",//打开道闸
        getOutImage:baseURL_FWDT + "deliverycar/capture"//获取出库车辆出门的抓拍照片
        // DoorOpen:baseTextdoor+"device/test",//开门按钮
    },
    Image_OnLoad: {//图片上传(服务大厅)
        OnLoad: baseURL_FWDT + "common/upload/image",//图片上传(服务大厅)
    },
    PAD_Login_in: {//pad端(登录)
        Login_in: baseURL + "login/account/in",//pad登录
    },
    PDA_Login_in: {//pda手机端(登录)
        Login_in: baseURL_PDA + "login/account/in",//pda登录
    },
    FWDT_Login_in: {//服务大厅(登录)
        Login_in: baseURL_FWDT + "login/account/in",//服务大厅登录
    }
    , KH_Login_in: {//客户(登录)
        Login_in: baseURL_KH + "login/in",//客户登录
    }
    , YS_Login_in: {//运输单位(登录)
        Login_in: baseURL_YS + "login/in",//运输单位登录
    }
    , PAD_Upload_Img: {
        upload: baseURL + "common/upload",//pad端上传图片
    }
    , PAD_jiaoche: {
        ok: baseURL + "receivecar/complete"//接车完成
    }
    , PAD_jianche: {
        FindCar: baseURL + "checkcar/getcarlist"//获取所有待检测和检测中的车辆
        , Select_Xiangmu: baseURL + "checkcar/getitem"//获取所有检查项目
        , Check_Photo: baseURL + "checkcar/photo"//单个检测项目拍照上传
        , Submit: baseURL + "checkcar/submit"//总检查结果提交
        , CanNotCheck: baseURL + "checkcar/cannotcheck"//无法检测

    },
    PDA_panku: {
        add: baseURL_PDA + "inventory/create",//创建盘库单子
    },
    PDA_temporaryOut: {//临时出库模块
        add: baseURL_PDA + "deliverycar/opendoor_tmp",//添加临时出库记录
    },
    PDA_jieche: {//接车
        FindCar_Only: baseURL_PDA + "receivecar/appoint/find",//查询带接车车辆(指派任务)
        FindCar: baseURL_PDA + "receivecar/find",//查询带接车车辆
        FindPark: baseURL_PDA + "receivecar/parkinfo",//查询指定车位信息
        Ok_Car: baseURL_PDA + "receivecar/confirm",//确认接车
        Bind_Car: baseURL_PDA + "receivecar/bind_car",//绑定车辆
        Bind_Park: baseURL_PDA + "receivecar/bind_park"//绑定车位信息
    },
    PDA_jiaoche: {//交车
        FindCar_Only: baseURL_PDA + "deliverycar/appoint/list",//查询交车车辆(指派任务)
        FindCar: baseURL_PDA + "deliverycar/list",//查询交车车辆
        FindParkinfo: baseURL_PDA + "deliverycar/parkinfo",//查询车辆位置信息
        Unbind_park: baseURL_PDA + "deliverycar/unbind",//解除车位绑定
        Ok_jiaoche: baseURL_PDA + "deliverycar/complete",//确认交车完成
    },
    PDA_pdi: {//pdi检测
        FindCar_Only: baseURL_PDA + "pdi/appoint/wait/list",//查询待解绑车位送去PDI检测的车辆(指派任务)
        FindCar: baseURL_PDA + "pdi/wait/list",//查询待解绑车位送去PDI检测的车辆
        FindCar_Ok_PDI_Only: baseURL_PDA + "pdi/appoint/sendback/list",//查询已完成PDI检测待送回车库的车辆
        FindCar_Ok_PDI: baseURL_PDA + "pdi/sendback/list",//查询已完成PDI检测待送回车库的车辆
        FindCar_PDI: baseURL_PDA + "pdi/complete/list",//查询在PDI检测的车辆
        Ok_PDI: baseURL_PDA + "pdi/check/complete",//完成PDI检测接口
        Unbind_Park: baseURL_PDA + "pdi/unbind",//解绑车位
        Bind_Park: baseURL_PDA + "pdi/bind",//绑定车位
        Get_Park_info: baseURL_PDA + "pdi/parkinfo"//查询车辆车位信息
    },
    FWDT_dataexchange: {
        in: baseURL_FWDT + "dataexchange/in"//入库资料交接提交与信息查询
        , out: baseURL_FWDT + "dataexchange/out"//出库资料交接提交与信息查询
    },
    FWDT_Day_Report: {
        Report_list: baseURL_FWDT + "report/list",//日报表接口
        Report_other_list: baseURL_FWDT + "report/otherfee"//其他费用列表
        , Report_carinfo_list: baseURL_FWDT + "report/vinno"//单辆车产生的停车费
    },
    FWDT_System: {//服务大厅系统管理
        type: {//类型管理
            add: baseURL_FWDT + "alltype/create",//添加自定义类型
            del: baseURL_FWDT + "alltype/delete",//删除自定义类型
            list: baseURL_FWDT + "alltype/list",//自定义类型列表
        }
    },
    FWDT_CWG_Sys: {
        list: baseURL_FWDT + "chuwugui/list"//所有储物柜列表
        , add: baseURL_FWDT + "chuwugui/submit"//新增储物柜
        , updata: baseURL_FWDT + "chuwugui/single"//修改储物柜
        , openLog: baseURL_FWDT + "chuwugui/openlog"//储物柜日志
        , doorOpenLog: baseURL_FWDT + "door/logs"//门禁开门日志
    },
    FWDT_panku: {
        list: baseURL_FWDT + "inventory/list",//盘库单列表
    },
    FWDT_Car_Cost: {//汽车加油洗车次数模块(服务大厅)
        info: baseURL_FWDT + "feecount/list",//节点详情
        list: baseURL_FWDT + "feecount/carlist",//汽车加油洗车次数列表
        check: baseURL_FWDT + "feecount/confirm",//加油洗车指令确认
    },
    FWDT_temporaryOut: {//临时出库模块(服务大厅)
        list: baseURL_FWDT + "tmpout/list",//临时出库记录列表
    },
    FWDT_PAD_Car_info: {//服务大厅(车位信息)
        Select_PAD_Car_info: baseURL_FWDT + "padmng/list",//查找pad端的车辆信息
        Look_PAD_Car_info: baseURL_FWDT + "padmng/info",//查看pad端的车辆信息

    },
    FWDT_Park_info: {//服务大厅(车位信息)
        Select_Park_info: baseURL_FWDT + "park/search",//查找未绑定的车位信息
        Select_All_Park_info: baseURL_FWDT + "park/list",//查找所有的车位信息
        add: baseURL_FWDT + "park/create",//新建车位
        update: baseURL_FWDT + "park/update",//修改车位
        area: baseURL_FWDT + "park/area",//获取所有区域
        update_img: baseURL_FWDT + "park/generatePicture",//重新生成车位图片
    },
    FWDT_People_info: {//服务大厅(人员管理)
        Add_People: baseURL_FWDT + "member/create",//新增用户
        Update_People: baseURL_FWDT + "member/update",//更新用户
        Delect_People: baseURL_FWDT + "member/delete",//删除用户
        People_list: baseURL_FWDT + "member/search",//查询用户列表
        People_Info_Byid: baseURL_FWDT + "member/load",//根据id查询详细信息
        Edit_PassWord: baseURL_FWDT + "login/password/change",//修改密码
        Reset_PassWord: baseURL_FWDT + "member/password/reset",//重置密码
        Out_del: baseURL_FWDT + "member/offduty",//离职
        Out_del_list: baseURL_FWDT + "member/offduty/list"//离职人员列表
        , Update_power: baseURL_FWDT + "member/authority"//更新权限接口
    },
    FWDT_Customer_PayType: {//服务大厅(客户单位)费用字表
        add: baseURL_FWDT + "customer/fee/create",//添加资费
        del: baseURL_FWDT + "customer/fee/delete",//删除资费
        update: baseURL_FWDT + "customer/fee/update",//更新费用
        list: baseURL_FWDT + "customer/fee/list",//资费列表
    },
    FWDT_Customer_Dw: {//服务大厅(客户单位)
        Add_Motify_Customer: baseURL_FWDT + "customer/submit"//新增及修改客户单位信息
        , Select_Customer: baseURL_FWDT + "customer/search"//查询客户数据
        , Select_Customer_ById: baseURL_FWDT + "customer/info" //查询客户详细信息
        , Select_Customer_Contract_ById: baseURL_FWDT + "customer/contract" //查询客户合同照片
        , Delect_Customer_Contract_ById: baseURL_FWDT + "customer/contract/delete" //删除指定合同照片
        , Drop_Down_Customer_Info: baseURL_FWDT + "customer/list" //获得客户下拉数据
        , Child_list: baseURL_FWDT + "customer/subaccount/list"//客户的子账号信息
        , Del: baseURL_FWDT + "customer/delete"//禁用客户单位
        , Recover: baseURL_FWDT + "customer/recover"//恢复禁用
        , Recover_list: baseURL_FWDT + "customer/deletedlist" //禁用用户列表
    },
    FWDT_Transport_Dw: {//服务大厅(运输单位)
        Add_Motify_Transport: baseURL_FWDT + "transport/submit"//新增及修改运输单位信息
        , Select_Transport: baseURL_FWDT + "transport/search"//查询运输单位数据
        , Select_Transport_ById: baseURL_FWDT + "transport/info" //查询运输单位详细信息
        , Select_Transport_Contract_ById: baseURL_FWDT + "transport/contract" //查询运输单位合同照片
        , Delect_Transport_Contract_ById: baseURL_FWDT + "transport/contract/delete" //删除指定合同照片
        , Drop_Down_Transport_Info: baseURL_FWDT + "transport/list" //获得运输单位下拉数据
    },
    FWDT_jieche: {//服务大厅(接车单)
        Add_jieche: baseURL_FWDT + "receivecar/create"//新增接车单
        , Select_jieche: baseURL_FWDT + "receivecar/search"//查询接车单数据
        , Select_jieche_ById: baseURL_FWDT + "receivecar/info"//查询接车单数据
        , Update_jieche_ById: baseURL_FWDT + "receivecar/update" //更新接车单
        , Delect_jieche_ById: baseURL_FWDT + "receivecar/delete" //单个删除接车单
        , Delect_jieche_ByIds: baseURL_FWDT + "receivecar/delete_batch" //批量删除接车单
        , Add_jieche_ByYuYue: baseURL_FWDT + "receivecar/create_by_appointment" //根据预约接车单生成接车单
        , Select_time_active: baseURL_FWDT + "bindlog/list"//车辆绑定日志
        , Total: baseURL_FWDT + "receivecar/total"//一些单子数量
        , pointlist: baseURL_FWDT + "bindlog/pointlist"//完整操作日志
    }
    , FWDT_YuYue_jieche: {//服务大厅(预约接车单)
        Add_YuYue_jieche: baseURL_FWDT + "appointment/receivecar/create"//新增及修改运输单位信息
        , Select_YuYue_jieche: baseURL_FWDT + "appointment/receivecar/search"//查询预约接车单数据
        , Select_YuYue_To_jieche: baseURL_FWDT + "appointment/receivecar/find"//查询预约接车单数据(预约单转接车单)
        , Update_YuYue_jieche: baseURL_FWDT + "appointment/receivecar/update" //更新预约接车单数据
        , Look_YuYue_jieche: baseURL_FWDT + "appointment/receivecar/info" //查看预约接车单数据
        , Deal: baseURL_FWDT + "appointment/receivecar/deal"//处理预约入库单

        // ,Delect_Customer_Contract_ById:baseURL_FWDT+"customer/contract/delete" //删除指定合同照片
        // ,Drop_Down_Customer_Info:baseURL_FWDT+"customer/list" //获得客户下拉数据
    }
    , FWDT_YuYue_bljc: {//服务大厅(办理进场)
        Select_bljc: baseURL_FWDT + "checkin/load"//办理进场页面加载数据接口
        , Save_bljc: baseURL_FWDT + "checkin/create"//保存办理进场信息单
        , Check_bljc: baseURL_FWDT + "checkin/check"//检测是否能办理进场
        , Look_bljc_info: baseURL_FWDT + "checkin/info" //查看办理进场时填写的消息
        , Update_bljc: baseURL_FWDT + "checkin/update" //修改进场信息信息单
        , Submit_bljc: baseURL_FWDT + "checkin/entry" //办理进场
        , Quxiao_bljc: baseURL_FWDT + "checkin/cancle" //取消进场
        , Jujue_bljc: baseURL_FWDT + "checkin/refuse/entry"//拒绝进场
        , Select_driver: baseURL_FWDT + "member/driver/list"//查找驾驶员
        , Print_qr: baseURL_FWDT + "checkin/print"//改变打印状态
        , UploadImg: baseURL_FWDT + "receivecar/update/check"//重新上传检验照片
        , Cancel: baseURL_FWDT + "checkin/cancel"//取消办理进场
        // ,Delect_Customer_Contract_ById:baseURL_FWDT+"customer/contract/delete" //删除指定合同照片
        // ,Drop_Down_Customer_Info:baseURL_FWDT+"customer/list" //获得客户下拉数据
    }
    , FWDT_PDI_jiance: {//服务大厅(办理进场)
        Select_Not_Do_PDI: baseURL_FWDT + "pdi/undo/list"//查找未进行PDI检测的车辆
        , Select_Has_Do_PDI: baseURL_FWDT + "pdi/hasdo/list"//查找已进行PDI检测的车辆
        , To_Driver: baseURL_FWDT + "pdi/appointdriver"//指定驾驶员
        , Add_PDI_jianche: baseURL_FWDT + "pdi/create"//创建PDI检测
    }
    , FWDT_jiaoche: {//服务大厅(交车模块)
        Select_Can_jiaoche: baseURL_FWDT + "deliverycar/all/cars"//查找可交车的车辆信息
        , Select_jiaoche_jilu: baseURL_FWDT + "deliverycar/search"//查找交车单记录表数据
        , Select_Car_By_kh_id: baseURL_FWDT + "deliverycar/customer/cars"//根据客户id获取客户所有的车辆信息
        , Select_Car_Byid: baseURL_FWDT + "deliverycar/info"//根据id查询交车单信息
        , Add_jiaoche: baseURL_FWDT + "deliverycar/create"//创建交车单
        , Update_jiaoche: baseURL_FWDT + "deliverycar/update"//更新指定交车单
        , Delete_jiaoche: baseURL_FWDT + "deliverycar/delete"//取消刪除交车单
        , YY_Zhuang_jiache: baseURL_FWDT + "deliverycar/create_by_appointment"//预约交车单转为交车单
        , Work_QR: baseURL_FWDT + "door/allocCode",//获取打开门禁的二维码参数
    }
    , FWDT_YuYue_jiaoche: {//服务大厅(预约交车模块)
        Select_Can_jiaoche: baseURL_FWDT + "deliverycar/all/cars"//查找可交车的车辆信息
        , Select_jiaoche_jilu: baseURL_FWDT + "appointment/deliverycar/search"//查找预约交车单记录表数据
        , Select_Car_By_kh_id: baseURL_FWDT + "appointment/deliverycar/customer/cars"//根据客户id获取客户所有的车辆信息
        , Select_Car_Byid: baseURL_FWDT + "appointment/deliverycar/info"//根据id查询该预约交车单信息
        , Add_jiaoche: baseURL_FWDT + "appointment/deliverycar/create"//新建预约交车单
        , Update_jiaoche: baseURL_FWDT + "appointment/deliverycar/update"//更新指定交车单
        , Delete_jiaoche: baseURL_FWDT + "appointment/deliverycar/delete"//刪除预约交车单
        , Deal: baseURL_FWDT + "appointment/deliverycar/deal"//处理预约入库单
    }
    , FWDT_ZKCL: {//服务大厅(在库车辆接口)
        Select_All_ZKCL: baseURL_FWDT + "storage/list"//查找所有的在库车辆
        // ,Select_Has_Do_PDI:baseURL_FWDT+"pdi/hasdo/list"//查找已进行PDI检测的车辆
        // ,To_Driver:baseURL_FWDT+"pdi/appointdriver"//指定驾驶员
        // ,Add_PDI_jianche:baseURL_FWDT+"pdi/create"//创建PDI检测
    }
    , KH_Car_Cost: {//汽车加油洗车功能模块(客户)
        list: baseURL_KH + "feecount/list",//汽车加油洗车列表
        carList: baseURL_KH + "feecount/carlist",//可发送指令的车辆
        add: baseURL_KH + "feecount/create",//点击添加加油或洗车等等
    }
    , KH_ZKCL: {//服务大厅(在库车辆接口)
        Select_All_ZKCL: baseURL_KH + "storage/search",//查找所有的在库车辆
        Select_All_ZKCL2: baseURL_KH + "storage/search2",//查找所有的在库车辆
        Select_All_ZKCL3: baseURL_KH + "storage/search3",
        // ,Select_Has_Do_PDI:baseURL_FWDT+"pdi/hasdo/list"//查找已进行PDI检测的车辆
        // ,To_Driver:baseURL_FWDT+"pdi/appointdriver"//指定驾驶员
        // ,Add_PDI_jianche:baseURL_FWDT+"pdi/create"//创建PDI检测
    }
    , KH_YuYue_jieche: {//客户(预约接车单)
        Add_YuYue_jieche: baseURL_KH + "appointment/receivecar/create"//创建预约接车单
        , Select_YuYue_jieche: baseURL_KH + "appointment/receivecar/search"//查询预约接车单数据
        , Update_YuYue_jieche: baseURL_KH + "appointment/receivecar/update" //更新预约接车单数据
        , Look_YuYue_jieche: baseURL_KH + "appointment/receivecar/info" //查看预约接车单数据
        // ,Delect_Customer_Contract_ById:baseURL_FWDT+"customer/contract/delete" //删除指定合同照片
        // ,Drop_Down_Customer_Info:baseURL_FWDT+"customer/list" //获得客户下拉数据
    }
    , KH_YuYue_jiaoche: {//客户(预约交车模块)
        //Select_Can_jiaoche: baseURL_KH + "appointment/deliverycar/customer/cars"//查找客户可交车的车辆信息
        Select_jiaoche_jilu: baseURL_KH + "appointment/deliverycar/search"//查找预约交车单记录列表
        , Select_Car_By_kh_id: baseURL_KH + "appointment/deliverycar/customer/cars"//根据客户id获取客户所有的车辆信息
        , Select_Car_Byid: baseURL_KH + "appointment/deliverycar/info"//根据id查询该预约交车单信息
        , Add_jiaoche: baseURL_KH + "appointment/deliverycar/create"//新建预约交车单
        , Update_jiaoche: baseURL_KH + "appointment/deliverycar/update"//更新指定交车单
        , Delete_jiaoche: baseURL_KH + "appointment/deliverycar/delete"//刪除预约交车单
    }
    , YS_Car_Manage: {//运输单位(车辆管理模块)
        //Select_Can_jiaoche: baseURL_KH + "appointment/deliverycar/customer/cars"//查找客户可交车的车辆信息
        Upload_image: baseURL_YS + "common/upload/image"//运输单位上传图片
        , Add: baseURL_YS + "tcarmng/add"//新增车辆记录
        , Update: baseURL_YS + "tcarmng/update"//更新车辆记录
        , List: baseURL_YS + "tcarmng/search"//车辆列表记录查询
        , Byid: baseURL_YS + "tcarmng/info"//根据id查询车辆记录
    }


};


window.Api = Api;

//全局console管理
console.log = (function (oriLogFunc) {
    return function () {
        //判断配置文件是否开启日志调试
        if (Api.Log) {
            try{
                oriLogFunc.call(console, ...arguments);
            }catch(e){
                console.error('console.log error', e);
            }
        }
    }
})(console.log);


// layui.config({
//     base: '../js/layuiadmin/' //静态资源所在路径
// }).extend({
//     notice: 'notice'//第三方通知插件
// });
