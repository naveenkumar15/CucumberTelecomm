$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddCustomer.feature");
formatter.feature({
  "name": "To test the add customer functionlaity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@xyz"
    },
    {
      "name": "@addcust"
    }
  ]
});
formatter.scenario({
  "name": "To test the submit button1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@xyz"
    },
    {
      "name": "@addcust"
    },
    {
      "name": "@smoke1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom home pag",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_telecom_home_pag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the form details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "testf",
        "testl",
        "test4@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testxf",
        "testxl",
        "test1@gmail.com",
        "chennai",
        "223456789"
      ]
    },
    {
      "cells": [
        "testyf",
        "testyl",
        "test2@gmail.com",
        "chennai",
        "323456789"
      ]
    },
    {
      "cells": [
        "testzf",
        "testzl",
        "test3@gmail.com",
        "chennai",
        "423456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_form_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_submits_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The customer should see the customer id generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_customer_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the submit button2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@xyz"
    },
    {
      "name": "@addcust"
    },
    {
      "name": "@smoke2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom home pag",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_telecom_home_pag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the form details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "testf",
        "testl",
        "test4@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testxf",
        "testxl",
        "test1@gmail.com",
        "chennai",
        "223456789"
      ]
    },
    {
      "cells": [
        "testyf",
        "testyl",
        "test2@gmail.com",
        "chennai",
        "323456789"
      ]
    },
    {
      "cells": [
        "testzf",
        "testzl",
        "test3@gmail.com",
        "chennai",
        "423456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_form_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_submits_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The customer should see the customer id generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_customer_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the submit button3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@xyz"
    },
    {
      "name": "@addcust"
    },
    {
      "name": "@smoke3"
    },
    {
      "name": "@smoke1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom home pag",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_telecom_home_pag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the form details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "testf",
        "testl",
        "test4@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testxf",
        "testxl",
        "test1@gmail.com",
        "chennai",
        "223456789"
      ]
    },
    {
      "cells": [
        "testyf",
        "testyl",
        "test2@gmail.com",
        "chennai",
        "323456789"
      ]
    },
    {
      "cells": [
        "testzf",
        "testzl",
        "test3@gmail.com",
        "chennai",
        "423456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_form_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_submits_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The customer should see the customer id generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_customer_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/AddtariffPlan.feature");
formatter.feature({
  "name": "To test add tariff plan functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Traffi details and get message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "User type the form details\"\u003cMonthly Rental\u003e\",\"\u003cFree Local MinutesFree\u003e\",\"\u003cInternational Minutes\u003e\",\"\u003cFree SMS Pack\u003e\",\"\u003cLocal Per Minutes Charges\u003e\",\"\u003cInternational Per Minutes Charges\u003e\",\"\u003cSMS Per Charges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the sumit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "Free Local MinutesFree",
        "International Minutes",
        "Free SMS Pack",
        "Local Per Minutes Charges",
        "International Per Minutes Charges",
        "SMS Per Charges"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "609",
        "700",
        "800"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Traffi details and get message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type the form details\"200\",\"300\",\"400\",\"500\",\"609\",\"700\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_type_the_form_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sumit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.click_the_sumit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanSteps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Testsprint3.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Traffi details and get message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "User type the form details\"\u003cMonthly Rental\u003e\",\"\u003cFree Local MinutesFree\u003e\",\"\u003cInternational Minutes\u003e\",\"\u003cFree SMS Pack\u003e\",\"\u003cLocal Per Minutes Charges\u003e\",\"\u003cInternational Per Minutes Charges\u003e\",\"\u003cSMS Per Charges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the sumit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "Free Local MinutesFree",
        "International Minutes",
        "Free SMS Pack",
        "Local Per Minutes Charges",
        "International Per Minutes Charges",
        "SMS Per Charges"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "609",
        "700",
        "800"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Traffi details and get message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type the form details\"200\",\"300\",\"400\",\"500\",\"609\",\"700\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_type_the_form_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sumit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.click_the_sumit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanSteps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});