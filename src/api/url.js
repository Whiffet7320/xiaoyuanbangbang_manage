export default {
    // 校园帮帮
    // baseUrl:'https://beikeyuan.bjxinzeyuan.cn',
    baseUrl: 'https://guangke.bjxinzeyuan.cn', //https://beikeyuan.bjxinzeyuan.cn  http://192.168.50.142:9004
    login: '/admin/login', //登录
    gaobai: '/admin/gaobai', //告白
    jishi: "/admin/jishi", //集市
    shudong: '/admin/shudong', //树洞
    baoxiu: "/admin/baoxiu", //报修
    fengjing: "/admin/fengjing", //风景
    shougou: "/admin/shougou", //收购 1失物 2拾物
    pinche: "/admin/pinche", //拼车
    pindan: "/admin/pindan", //拼单
    comment_list: '/admin/comment_list', //评论列表
    shudong_comment_list:'/admin/shudong_comment_list',//
    update_status:'/admin/update_status',//状态修改
    article:'/admin/article',//文章列表
    add_video:'/admin/add_video',//上传音乐
    video_list:'/admin/video_list',//
    is_best:'/admin/is_best',// 树洞设为精选
    update_admin:'/admin/update_admin',//
    admin_list:'/admin/admin_list',//
    add_admin:'/admin/add_admin',
    menu:'/admin/menu',//
    delete_admin:'/admin/delete_admin',//
    admin_log_list:'/admin/admin_log_list',//
    update_zan_num:'/admin/update_zan_num',//
    update_read_num:'/admin/update_read_num',//
    // 
    users:'/admin/users',//用户列表
    usersIdMoneyRecords:'/admin/users',//用户积分列表
    categories:'/admin/categories',//分类列表
    addCategories:'/admin/categories',//新增分类
    updateCategories:'/admin/categories',//修改分类
    items:'/admin/items',//商品/服务列表
    uploadToken:'/api/upload/token',//阿里云上传sts
    idCards:'/admin/id-cards',//身份认证
    demandQuotes:'/admin/demand-quotes',//需求单列表
    ordersId:'/admin/orders',//修改订单信息
    articles:'/admin/articles',//文章列表
    articlesTypes:'/admin/articles-types',//文章类型
    banners:'/admin/banner',//banner列表
    bannersPositions:'/admin/banners-positions',//banner位置列表
    bannersJumpTypes:'/admin/banners-jump-types',//banner跳转类型
    globalConfigs:'/admin/global-configs',//全局变量
    areas:'/admin/areas',//所有城市分页
    feedbacks:'/admin/feedbacks',//反馈列表
    withdraw:'/admin/withdraw',//提现列表
    fixedPosition:'/admin/fixed-position',//固定位置
    positions:'/admin/positions',//固定位置列表
    fixedPositionItem:'/admin/fixed-position-item',//固定位置商品列表
    itemAll:'/admin/items-all',//全部商品
    turntableItem:'/admin/turntable-item',//奖品列表
    awards:'/admin/awards',//中奖列表
    goodsOrder:'/admin/goods-order',//商品订单列表
    money:'/admin/money',//修改用户金钱
    score:'/admin/score',//修改用户积分
    // 模板
    productList:'/admin/product/list',//商品列表
    loginInfo:'/admin/login/info',
    productUpload:'/admin/product/upload',//上传商品图片
    categorySave:'/admin/category/save',//商品分类保存和编辑
    categoryIndex:'/admin/category/index',//商品分类列表
    productSave:'/admin/product/save',//添加商品和编辑
    categoryDel:'/admin/category/del',//商品分类删除
    productAttrs:'/admin/product/attrs',//获取商品规格属性
    productDescription:'/admin/product/description',//获取商品详情
    combinationSave:'/admin/combination/save',//添加拼团商品
    combinationList:'/admin/combination/list',//拼团商品列表
    combinationAttrs:'/admin/combination/attrs',//获取拼团商品规格
    combinationDescription:'/admin/combination/description',//获取拼团商品详情
    combinationShow:'/admin/combination/show',//拼团商品上下架
    productShow:'/admin/product/show',//商品上下架
    activitySave:'/admin/activity/save',//添加卖场活动
    activityIndex:'/admin/activity/index',//卖场活动列表
    activityDel:'/admin/activity/del',//删除卖场活动
    orderIndex:'/admin/order/index',//订单列表
    activityAdd_product:'/admin/activity/add_product',//添加卖场商品
    activityList_product:'admin/activity/list_product',//活动商品列表
    orderDelivery:'/admin/order/delivery',//订单发货
    activityList_gift:'/admin/activity/list_gift',//拼团有礼主题列表
    activityAdd_gift:'/admin/activity/add_gift',//添加和编辑拼团有礼主题
    activityDel_gift:'/admin/activity/del_gift',//删除拼团有礼主题
    activityDel_cate_gift:'/admin/activity/del_cate_gift',//删除拼团有礼下属分类
    activityAdd_cate_gift:'admin/activity/add_cate_gift',//添加拼团有礼下属分类
    activityDel_product:'admin/activity/del_product',//删除卖场活动商品
    uniqidIndex:'/admin/uniqid/index',//靓号列表
    uniqidAdd:'/admin/uniqid/add',//靓号添加
    uniqidDel:'/admin/uniqid/del',//靓号删除
    combinationAdd_product_cate:'/admin/combination/add_product_cate',//商品加入拼拼有礼分类
    combinationList_product_cate:'/admin/combination/list_product_cate',//拼团有礼分类下的商品,
    combinationDel_product_cate:'/admin/combination/del_product_cate',//删除拼拼有礼分类下的商品
    userIndex:'/admin/user/index',//用户列表
    webconfigSave:'/admin/webconfig/save',//配置文件修改
    webconfigIndex:'/admin/webconfig/index',//配置文件列表
    sell_order_list:'/admin/sell_order_list',//寄售列表
    confirm_sell_order:'/admin/confirm_sell_order',//同意寄售
    save_shipping_templates:'/admin/save_shipping_templates',//添加和编辑运费模版
    list_shipping_templates:'/admin/list_shipping_templates',//运费模板列表
    detail_shipping_templates:'/admin/detail_shipping_templates',//查看运费模版详情
    del_shipping_templates:'/admin/del_shipping_templates',//删除运费模板
    dashboard:'/admin/dashboard',//后台首页数据
    user_bill_log:'/admin/user_bill_log',//用户账户变动明细
    template_message_list:'/admin/template_message_list',//消息模版列表
    template_message_save:'/admin/template_message_save',//模板消息编辑
    user_extract:'/admin/user_extract',//用户提现列表
    upload_pic:'/admin/upload_pic',//上传轮播图和开屏页图片
    banner_add:'/admin/banner_add',//轮播图设置
    banner_list:'/admin/banner_list',//轮播图列表
    banner_edit:'/admin/banner_edit',//轮播图编辑
    banner_del:'/admin/banner_del',//轮播图删除
    open_pic_add:'/admin/open_pic_add',//开屏页设置
    open_pic:'/admin/open_pic',//开屏页查看
    open_pic_edit:'/admin/open_pic_edit',//开屏页编辑
    data_center:'/admin/data_center',//数据中心
    other_shipping_templates:'/admin/other_shipping_templates',//无分页的
    orderDel:'/admin/order/del',//订单删除
    updat_user_info:'/admin/updat_user_info',//修改用户信息
    article_list:'/admin/article_list',//文章列表
    article_add:'/admin/article_add',//添加文章
    article_edit:'/admin/article_edit',//编辑文章
    article_del:'/admin/article_del',//删除文章
    user_pintuan_log:'/admin/user_pintuan_log',//拼团记录
    user_pintuan_count:'/admin/user_pintuan_count',//拼团信息统计
}