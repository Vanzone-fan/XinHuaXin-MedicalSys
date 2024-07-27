function createSidebar() {
    const sidebarHTML = `
        <aside class="lyear-layout-sidebar">
          <div id="logo" class="sidebar-header">
            <a href="index.html">
              <span>智慧医疗服务报销系统</span>
            </a>
          </div>
          <div class="lyear-layout-sidebar-scroll">
            <nav class="sidebar-main">
              <ul class="nav nav-drawer">
                <li class="nav-item active">
                  <a href="index.html"><i class="mdi mdi-home"></i> 后台首页</a>
                </li>
                <li class="nav-item nav-item-has-subnav">
                  <a href="javascript:void(0)"><i class="mdi mdi-palette"></i> 医疗基本信息维护</a>
                  <ul class="nav nav-subnav">
                    <li><a href="drug_info.html">药品信息维护</a></li>
                    <li><a href="diagnose_treatment_info.html">诊疗项目信息维护</a></li>
                    <li><a href="serve_facilities_info.html">服务设施项目维护</a></li>
                    <li><a href="disease_type.html">病种信息维护</a></li>
                    <li><a href="designated_institution_info.html">定点医疗机构信息维护</a></li>
                    <li><a href="benefit_calculation_parameters.html">医疗待遇计算参数维护</a></li>
                  </ul>
                </li>
                <li class="nav-item nav-item-has-subnav">
                  <a href="javascript:void(0)"><i class="mdi mdi-format-align-justify"></i> 医疗待遇审批</a>
                  <ul class="nav nav-subnav">
                    <li><a href="approval_of_personnel_medical_institutions.html">人员就诊机构审批</a></li>
                    <li><a href="special_inspection_and_special_treatment_approval.html">特检特治审批</a></li>
                  </ul>
                </li>
                <li class="nav-item nav-item-has-subnav">
                  <a href="javascript:void(0)"><i class="mdi mdi-file-outline"></i> 医保中心报销</a>
                  <ul class="nav nav-subnav">
                    <li><a href="central_reimbursement.html">中心报销</a></li>
                    <li><a href="cancel_reimbursement.html">取消报销</a></li>
                  </ul>
                </li>
                <li class="nav-item nav-item-has-subnav">
                  <a href="javascript:void(0)"><i class="mdi mdi-language-javascript"></i> 综合查询</a>
                  <ul class="nav nav-subnav">
                    <li><a href="medical_personnel_cost_inquiry.html">医疗人员费用查询</a></li>
                  </ul>
                </li>
                <li class="nav-item nav-item-has-subnav">
                  <a href="javascript:void(0)"><i class="mdi mdi-menu"></i> 公共业务</a>
                  <ul class="nav nav-subnav">
                    <li><a href="basic_information_of_the_unit.html">单位基本信息维护</a></li>
                    <li><a href="personal_basic_information.html">个人基本信息维护</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div class="sidebar-footer">
              <p class="copyright">
                Copyright &copy; 2019. <a target="_blank" href="http://lyear.itshubao.com">IT书包</a> All rights reserved.
              </p>
            </div>
          </div>
        </aside>
      `;
    return sidebarHTML;
}

// 将侧边栏插入到页面中
document.querySelector(".sidebar-container").innerHTML = createSidebar();
