<template>
  <div>
    <h3>成品订单</h3>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <h4>订单编号：{{orderInfo.orderNum}}</h4>
      <!-- 订单状态 -->
      <div class="order-state" v-if="orderInfo.currState">
        <div class="curr-state">
          <h5>{{orderInfo.currState.state}}</h5>
          <p class="curr-time">{{orderInfo.currState.timestamp | formatTime}}</p>
        </div>
        <div class="records">
          <div class="record-item" 
          v-for="(record,index) in orderInfo.records" 
          :key="index"
          :class="{complete: record.complete}"
          >
            <p class="iconfont icon-wancheng icon" :class="{complete: record.complete}"></p>
            <p class="title">{{record.desc}}</p>
            <p class="time">{{record.timestamp | formatTime}}</p>
          </div>
        </div>
      </div>
      <!-- 物流信息 -->
      <div class="logistics-container">
        <h4 class="header">物流信息</h4>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="packages">
          <el-tab-pane name="1" class="package-item">
            <span slot="label">包裹1<i :class="{'dot': newMessageIndex===1}"></i></span>
            <div class="package-info">
              <h5><span>发货方式：</span><span>物流发货</span></h5>
              <p><span>发货人：</span><span>胡秋秋</span></p>
              <div class="left">
                <p><span>发货时间：</span><span>2019-11-11 13:05:55</span></p>
                <p><span>运单号：</span><span>中通快递</span></p>
                <img src="@/assets/images/bookcase.webp"/> 
                <div class="name-number"><p>日系书柜</p><p>X1</p></div>
              </div>
              <div class="right">
                <p><span>物流状态：</span><span>已发货</span></p>
                <el-timeline style="padding: 0">
                  <!-- <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item> -->
                  <el-timeline-item
                    color="red"
                    placement="top"
                    timestamp="2018-04-03 20:46">
                  </el-timeline-item>
                  <el-timeline-item
                    placement="top"
                    timestamp="2018-04-03 20:47">
                  </el-timeline-item>
                  <el-timeline-item
                    placement="top"
                    timestamp="2018-04-03 20:49">
                  </el-timeline-item>
                  <el-timeline-item
                    placement="top"
                    timestamp="2018-04-03 20:49">
                  </el-timeline-item>
                  <el-timeline-item
                    placement="top"
                    timestamp="2018-04-03 20:49">
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="2" class="package-item">
            <span slot="label">包裹2<i :class="{'dot': newMessageIndex===2}"></i></span>
            包裹2
          </el-tab-pane>
          <el-tab-pane name="3" class="package-item">
            <span slot="label">包裹3<i :class="{'dot': newMessageIndex===3}"></i></span>
            包裹3
          </el-tab-pane>
        </el-tabs>
        <div class="footer">
          <ul>
            <h3>收货人信息</h3>
            <li>收货人：</li>
            <li>联系电话：</li>
            <li>地址：</li>
          </ul>
          <ul>
            <h3>买家信息</h3>
            <li>用户名：</li>
          </ul>
          <ul>
            <h3>付款信息</h3>
            <li>实付金额：</li>
            <li>付款方式：</li>
            <li>付款时间：</li>
            <li>支付流水号：</li>
          </ul>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="spu-container">
        <div class="titleList">
          <span>商品</span>
          <span>单价</span>
          <span>数量</span>
          <span>小计</span>
          <span>采购单状态</span>
          <span>售后状态</span>
        </div>
        <div class="spu-list">
          <div class="spu-item">
            <h3>SPU ID:lh1300002</h3>
            <div class="wrapper">
              <div class="product-list">
                <div class="product-item">
                  <div class="product">
                    <img src="@/assets/images/table.webp"/>
                    <div class="detail">
                      <h4 class="name">简约餐桌椅子</h4>
                      <p class="desc">材质：橡木；长50cm*高165cm</p>
                    </div>
                  </div>
                  <div class="unit-price">￥100.00</div>
                  <div class="number">2</div>
                  <div class="price">￥200.00</div>
                </div>
              </div>
              <div class="right">
                <div class="order-state"><span>已发货</span></div>
                <div class="post-sale-state"></div>
              </div>
            </div>
          </div>
          <div class="spu-item">
            <h3>SPU ID:lh1300002</h3>
            <div class="wrapper">
              <div class="product-list left">
                <div class="product-item">
                  <div class="product">
                    <img src="@/assets/images/bookcase.webp"/>
                    <div class="detail">
                      <h4 class="name">日系书柜</h4>
                      <p class="desc">长0.9m,层数3层</p>
                    </div>
                  </div>
                  <div class="unit-price">￥480</div>
                  <div class="number">1</div>
                  <div class="price">￥480.00</div>
                </div>
                <div class="product-item service">
                  <div class="product">
                    <div class="detail">
                      <h4 class="name">书柜安装</h4>
                    </div>
                  </div>
                  <div class="unit-price">￥0/次</div>
                  <div class="number">1</div>
                  <div class="price">￥200.00</div>
                </div>
              </div>
              <div class="right">
                <div class="order-state"><span>已发货</span></div>
                <div class="post-sale-state"></div>
              </div>
            </div>
            <p class="note bottom">
              买家备注：请尽快发货，如果好看还会继续下单，谢谢！
            </p>
          </div>
          <div class="spu-item">
            <h3>SPU ID:lh1300002</h3>
            <div class="wrapper">
              <div class="product-list">
                <div class="product-item">
                  <div class="product">
                    <img src="@/assets/images/clear.webp"/>
                    <div class="detail">
                      <h4 class="name">拆除服务</h4>
                    </div>
                  </div>
                  <div class="unit-price">￥70.00</div>
                  <div class="number">1</div>
                  <div class="price">￥70.00</div>
                </div>
              </div>
              <div class="right">
                <div class="order-state"><span>待支付首期款</span></div>
                <div class="post-sale-state"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <p class="total-price price"><span>商品总价:</span><span>￥850.00</span></p>
          <p class="pay-price price"><span>实收金额:</span><span>￥850.00</span></p>
        </div>
      </div>
      <!-- 采购单 -->
      <div class="order-container">
        <p>采购单</p>
        <h3>商品采购单</h3>
        <div class="titleList">
          <span>采购商品</span>
          <span>供应价</span>
          <span>数量</span>
          <span>供应价总计</span>
          <span>采购单状态</span>
          <span>采购链接</span>
          <span>售后状态</span>
          <span>操作</span>
        </div>
        <div class="po-list">
          <div class="po-item">
            <h3>采购单单号: c201911091155380848000003</h3>
            <div class="wrapper">
              <div class="product-list">
                <div class="product-item">
                  <div class="product">
                    <img src="@/assets/images/table.webp"/>
                    <div class="detail">
                      <h4 class="name">简约餐桌椅子</h4>
                      <p class="desc">材质：橡木；长50cm*高165cm</p>
                    </div>
                  </div>
                  <div class="supply-price">￥70.00</div>
                  <div class="number">2</div>
                  <div class="price">￥140.00</div>
                </div>
              </div>
              <div class="right">
                <div class="po-state"><span>已发货</span></div>
                <div class="po-link"><a href="javascript:;">采购链接</a></div>
                <div class="post-sale-state"></div>
                <div class="handle">
                  <div class="container">
                    <a href="javascript:;">查看采购单</a>
                    <a href="javascript:;">更换采购单</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="po-item">
            <h3>SPU ID:lh1300002</h3>
            <div class="wrapper">
              <div class="product-list left">
                <div class="product-item">
                  <div class="product">
                    <img src="@/assets/images/bookcase.webp"/>
                    <div class="detail">
                      <h4 class="name">日系书柜</h4>
                      <p class="desc">长0.9m,层数3层</p>
                    </div>
                  </div>
                  <div class="supply-price">￥480</div>
                  <div class="number">1</div>
                  <div class="price">￥480.00</div>
                </div>
                <div class="product-item service">
                  <div class="product">
                    <div class="detail">
                      <h4 class="name">书柜安装</h4>
                    </div>
                  </div>
                  <div class="supply-price">￥0/次</div>
                  <div class="number">1</div>
                  <div class="price">￥200.00</div>
                </div>
              </div>
              <div class="right">
                <div class="po-state"><span>已发货</span></div>
                <div class="po-link"><a href="javascript:;">采购链接</a></div>
                <div class="post-sale-state"></div>
                <div class="handle">
                  <div class="container">
                    <a href="javascript:;">查看采购单</a>
                    <a href="javascript:;">更换采购单</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="bottom">
          <p class="total-price price"><span>商品总价:</span><span>￥850.00</span></p>
          <p class="pay-price price"><span>实收金额:</span><span>￥850.00</span></p>
        </div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import  moment from "moment";
console.log(moment(1000000000).format("YYYY-MM-DD hh:mm:ss"))
// 添加订单记录的线条
function addLines(){
  let recordsNode = document.querySelectorAll(".records")[0];
  let recordItemNodes = document.querySelectorAll(".records .record-item");
  for(let i = 1; i < recordItemNodes.length; i++){
    let width = recordItemNodes[i].offsetLeft - recordItemNodes[i-1].offsetLeft - recordItemNodes[i-1].offsetWidth/2 + recordItemNodes[i].offsetWidth/2 - 30;
    let left = recordItemNodes[i-1].offsetLeft + recordItemNodes[i-1].offsetWidth/2 + 15;
    let top = 40;
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = width+"px";
    line.style.height = "2px";
    if(Array.from(recordItemNodes[i].classList).includes("complete")){
      line.style.backgroundColor = "blue";
    }else{
      line.style.backgroundColor = "#ccc";
    }
    line.style.position = "absolute";
    line.style.left = left+"px";
    line.style.top = top+"px";
    recordsNode.appendChild(line);
  }
}
export default {
  name: 'finalOrder',
  data(){
    return {
      activeName: '1',
      orderInfo:{},
      newMessageIndex: 3
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
      this.newMessageIndex = 0;
    },
    async getOrderInfo(){
      let result = await this.$API.reqOrderInfo();
      this.orderInfo = result.data;
    }
  },
  mounted(){
    // 获取订单数据--mock数据
    this.getOrderInfo();
    setTimeout(() => {
      addLines();
      var elementResizeDetectorMaker = require("element-resize-detector");
      var erd = elementResizeDetectorMaker();
      erd.listenTo(document.querySelectorAll(".records")[0], function(element) {
        let recordsNode = document.querySelectorAll(".records")[0];
        let recordItemNodes = document.querySelectorAll(".records .record-item");
        // 实时更新线条
        if(document.querySelectorAll(".records .line").length){
          for(let i = 1; i < recordItemNodes.length; i++){
            let width = recordItemNodes[i].offsetLeft - recordItemNodes[i-1].offsetLeft - recordItemNodes[i-1].offsetWidth/2 + recordItemNodes[i].offsetWidth/2 - 30;
            let left = recordItemNodes[i-1].offsetLeft + recordItemNodes[i-1].offsetWidth/2 + 15;
            let line = document.querySelectorAll(".records .line")[i-1];
            line.style.width = width+"px";
            line.style.left = left+"px";
          }
        }
      });
    }, 200);
    // document.getElementsByClassName("el-tabs__item")[this.newMessageIndex-1].classList.add("newMessage");
  },
  filters:{
    formatTime(value){
      return moment(value).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  updated(){

  }
}
</script>

<style lang="scss" scoped>
  // 订单状态
  .order-state{
    display: flex;
    .curr-state{
      flex: 0 0 300px;
      border: 1px solid #eee;
      padding: 20px;
      h5{
        font-size: 24px;
        margin: 10px 0;
      }
      .curr-time{
        font-size: 14px;
        color: #ccc;
      }
    }
    .records{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #eee;
      border-left: none;
      padding: 20px;
      position: relative;
      .record-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
          font-size: 20px;
          margin: 10px 0;
          &.complete{
            color: blue;
          }
        }
        .title{
          margin: 10px 0;
        }
        .time{
          font-size: 14px;
          color: #ccc;
          margin: 10px 0;
        }
      }
      .record-item+.record-item::after{
        position: absolete;
        content: "";
        // width: 
      }
    }
  }
  // 物流信息
  .logistics-container{
    width: 100%;
    h4{
      background-color: #eee;
      padding: 10px;
      font-size: 20px;
    }
    .packages{
      font-size: 16px;
      .package-item{
        // height: 100px;
        .package-info{
          border: 1px solid #eee;
          padding: 10px 20px;
          height: 300px;
          overflow-y: scroll !important;
          h5{
            span:first-child{
              display: inline-block;
              width: 100px;
            }
          }
          p{
            span:first-child{
              display: inline-block;
              width: 100px;
            }
          }
          &>p{
            margin-bottom: 0;
          }
          overflow: hidden;
          .left{
            float: left;
            margin-right: 100px;
            img{
              width: 80px;
              height: 80px;
              margin-right: 20px;
            }
            .name-number{
              display: inline-block;
              vertical-align: top;
              p{
                margin: 0;
                line-height: 1.5em;
              }
              p:nth-of-type(1){
                font-size: 16px;
              }
              p:nth-of-type(2){
                font-size: 16px;
                color: #ccc;
              }
            }
          }
          .right{
            float: left;
            .el-timeline-item:last-child{
              padding: 0;
            }
          }
        }
      }
      .dot{
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: red;
        vertical-align: top;
        margin-top: 12px;
      }
    }
    .footer{
      background-color: #eee;
      padding: 20px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      ul{
        padding: 0;
        margin: 0;
        width: 200px;
        h3{
          margin: 0;
          line-height: 2em;
        }
        li{
          font-size: 14px;
          color: #888;
          line-height: 2em;
          list-style: none;
        }
      }
    }
  }
  // 商品信息
  .spu-container{
    margin: 10px 0;
    .titleList{
      background-color: #eee;
      padding: 20px;
      span{
        display: inline-block;
        width: 15%;
      }
      span:nth-of-type(1){
        width: 25%;
      }
      span:nth-of-type(5){
        text-align: center;
      }
      span:nth-of-type(6){
        text-align: center;
      }
    }
    .spu-list{
      margin: 10px 0;
      .spu-item{
        overflow: hidden;
        margin: 10px 0;
        h3{
          background-color: #eee;
          font-size: 14px;
          font-weight: 300;
          padding: 20px;
          margin: 0;
        }
        .wrapper{
          display: flex;
          .product-list{
            display: inline-block;
            width: 70%;
            .product-item{
              display: flex;
              .product{
                box-sizing: border-box;
                width: 25 / 70 * 100%;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
                padding: 10px 20px;
                display: flex;
                img{
                  height: 80px;
                  flex: 0 0 80px;
                  margin-right: 10px;
                }
                .detail{
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  h4{
                    font-size: 12px;
                    margin: 0;
                    color: blue;
                    line-height: 1.5em;
                  }
                  p{
                    font-size: 12px;
                    margin: 0;
                  }
                }
              }
              .unit-price{
                flex: 0 0 15 / 70 * 100%;
                line-height: 80px;
              }
              .number{
                flex: 0 0 15 / 70 * 100%;
                line-height: 80px;
              }
              .price{
                flex: 0 0 15 / 70 * 100%;
                line-height: 80px;
              }
            }
            .product-item.service{
              .detail{
                .name{
                  color: black;
                  font-weight: 500;
                }
              }
              div{
                line-height: 30px;
              }
            }
            .product-item+.product-item{
              border-top: 1px dashed #eee;
            }
            .product-item:last-child{
              border-bottom: 1px solid #eee;
            }
          }
          .right{
            flex: 1;
            box-sizing: border-box;
            display: inline-block;
            // line-height: 80px;
            border: 1px solid #eee;
            display: flex;
            .order-state{
              text-align: center;
              flex: 1 0 50%;
              display: flex;
              span{
                margin: auto;
                margin-left: 40px;
              }
            }
            .post-sale-state{
              text-align: center;
              flex: 1 0 50%;
            }
          }
        }
        .note{
          border: 1px solid #eee;
          border-top: none;
          color: red;
          background-color: #f6baba;
          margin: 0;
          padding: 10px 20px;
        }
      }
    }
    &>.bottom{
      text-align: right;
      padding-right: 20px;
      .price{
        font-size: 14px;
        span:nth-of-type(2){
          display: inline-block;
          width: 100px;
        }
      }
      .pay-price{
        font-size: 20px;
        span:nth-of-type(2){
          color: red;
        }
      }
    }
  }
  // 采购单
  .order-container{
    margin: 10px 0;
    p{
      padding: 10px 20px;
      background-color: #eee;
    }
    h3{
      padding: 10px 20px;
      margin: 0;
      margin-bottom: 10px;
      font-size: 16px;
      border-bottom: 1px solid #eee;
    }
    .titleList{
      box-sizing: border-box;
      padding: 10px 0;
      background-color: #eee;
      span{
        display: inline-block;
        font-size: 16px;
      }
      span:nth-of-type(1){
        padding-left: 20px;
        width: 25%;
      }
      span:nth-of-type(2){
        width: 10%;
      }
      span:nth-of-type(3){
        width: 10%;
      }
      span:nth-of-type(4){
        width: 10%;
      }
      span:nth-of-type(5){
        width: 10%;
      }
      span:nth-of-type(6){
        width: 15%;
      }
      span:nth-of-type(7){
        width: 10%;
      }
      span:nth-of-type(8){
        width: 10%;
      }
    }
    .po-list{
      margin: 10px 0;
      .po-item{
        overflow: hidden;
        margin: 10px 0;
        h3{
          background-color: #eee;
          font-size: 14px;
          font-weight: 300;
          padding: 20px;
          margin: 0;
        }
        .wrapper{
          display: flex;
          .product-list{
            display: inline-block;
            width: 55%;
            .product-item{
              display: flex;
              .product{
                box-sizing: border-box;
                width: 25 / 55 * 100%;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
                padding: 10px 20px;
                display: flex;
                img{
                  height: 80px;
                  flex: 0 0 80px;
                  margin-right: 10px;
                }
                .detail{
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .name{
                    font-size: 12px;
                    margin: 0;
                    color: blue;
                    line-height: 1.5em;
                  }
                  .desc{
                    background-color: transparent;
                    font-size: 12px;
                    margin: 0;
                    padding: 0;
                  }
                }
              }
              .supply-price{
                flex: 0 0 10 / 55 * 100%;
                line-height: 80px;
              }
              .number{
                flex: 0 0 10 / 55 * 100%;
                line-height: 80px;
              }
              .price{
                flex: 0 0 10 / 55 * 100%;
                line-height: 80px;
              }
            }
            .product-item.service{
              .detail{
                .name{
                  color: black;
                  font-weight: 500;
                }
              }
              div{
                line-height: 30px;
              }
            }
            .product-item+.product-item{
              border-top: 1px dashed #eee;
            }
            .product-item:last-child{
              border-bottom: 1px solid #eee;
            }
          }
          .right{
            flex: 1;
            box-sizing: border-box;
            display: inline-block;
            // line-height: 80px;
            border: 1px solid #eee;
            display: flex;
            .po-state{
              text-align: center;
              flex: 1 0 10/45*100%;
              display: flex;
              span{
                margin: auto;
                margin-left: 10px;
              }
            }
            .po-link{
              flex: 1 0 15/45*100%;
              display: flex;
              border-left: 1px solid #eee;
              a{
                margin: auto;
                margin-left: 5px;
                color: blue;
              }
            }
            .post-sale-state{
              text-align: center;
              flex: 1 0 10/45*100%;
              border-left: 1px solid #eee;
            }
            .handle{
              flex: 1 0 10/45*100%;
              border-left: 1px solid #eee;
              display: flex;
              .container{
                margin: auto;
                display: flex;
                flex-direction: column;
                margin-left: 5px;
                a{
                  line-height: 1.5em;
                  font-size: 14px;
                  color: blue;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
