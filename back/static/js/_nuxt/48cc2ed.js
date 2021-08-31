(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{866:function(t,e,n){"use strict";n.r(e);n(7);var o={name:"GeneralPart",props:{org:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,saving:!1,errors:{},company:{},search:""}},mounted:function(){this.company=JSON.parse(JSON.stringify(this.org))},methods:{save:function(){var t=this;this.saving=!0,this.$org.updateGeneral(this.company).then((function(data){t.$store.dispatch("showSnackbar",t.$t("settings.global.billingSaved"))})).catch((function(e){t.errors=e,t.$store.dispatch("showSnackbar",t.$t("settings.global.billingNotSaved"))})).finally((function(){t.saving=!1}))}}},l=n(23),c=n(24),r=n.n(c),d=n(126),v=n(140),m=n(208),_=n(43),h=n(644),f=n(648),$=n(34),x=n(649),k=n(65),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        "+t._s(t.$t("settings.global.billing"))+"\n      ")])])],1),t._v(" "),n("v-card",{staticClass:"mb-4 pt-2"},[n("v-card-text",[n("v-text-field",{attrs:{label:t.$t("settings.global.businessName"),"error-messages":t.errors.name,disabled:t.saving},on:{keyup:function(e){t.errors.name=[]}},model:{value:t.company.name,callback:function(e){t.$set(t.company,"name",e)},expression:"company.name"}}),t._v(" "),n("v-select",{attrs:{items:t.$store.state.languages,label:t.$t("settings.global.selectLanguage"),disabled:t.saving,"item-value":"id","item-text":"language"},model:{value:t.company.language,callback:function(e){t.$set(t.company,"language",e)},expression:"company.language"}}),t._v(" "),n("v-autocomplete",{attrs:{items:this.$store.state.timezones,"search-input":t.search,label:t.$t("settings.global.timezone"),"error-messages":t.errors.timezone,disabled:t.saving},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},keyup:function(e){t.errors.timezone=[]}},model:{value:t.company.timezone,callback:function(e){t.$set(t.company,"timezone",e)},expression:"company.timezone"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{loading:t.saving,color:"success"},on:{click:t.save}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),w=component.exports;r()(component,{VAutocomplete:d.a,VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCol:h.a,VRow:f.a,VSelect:$.a,VSpacer:x.a,VTextField:k.a});n(44);var y={name:"ChangePreBoardingModal",props:{value:Boolean},data:function(){return{loading:!1,text:""}},mounted:function(){var t=this;this.text=JSON.parse(JSON.stringify(this.$store.state.welcomeMessages.find((function(a){return a.language===t.$store.state.selectedLanguage.id&&0===a.message_type})))).message},methods:{update:function(){var t=this;this.loading=!0,this.$org.updatePreboardingEmail(this.text,this.$store.state.selectedLanguage.id).then((function(data){t.$emit("input",!1),t.$emit("emailUpdated"),t.$store.dispatch("showSnackbar",t.$t("settings.preboardingChanged"))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.couldNotChange"))})).finally((function(){t.loading=!1}))}}},C=n(646),S=Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.changePreBoardingEmailHeader"))+" ("+t._s(t.$store.state.selectedLanguage.language)+")\n    ")]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.$t("settings.changePreBoardingEmailDescr")))]),t._v(" "),n("VTextAreaEmoji",{attrs:{label:t.$t("settings.slackKnowledge"),personalize:!0,emoji:!0},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading},on:{click:t.update}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),V=S.exports;r()(S,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:C.a,VSpacer:x.a});var M={name:"ChangeNewHireModal",props:{value:Boolean},data:function(){return{loading:!1,text:""}},mounted:function(){var t=this;this.text=JSON.parse(JSON.stringify(this.$store.state.welcomeMessages.find((function(a){return a.language===t.$store.state.selectedLanguage.id&&1===a.message_type})))).message},methods:{update:function(){var t=this;this.loading=!0,this.$org.updateNewHireEmail(this.text,this.$store.state.selectedLanguage.id).then((function(data){t.$emit("input",!1),t.$emit("emailUpdated"),t.$store.dispatch("showSnackbar",t.$t("settings.newHireEmailChanged"))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.newHireEmailCouldNotChange"))})).finally((function(){t.loading=!1}))}}},E=Object(l.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.newHireEmail"))+" ("+t._s(t.$store.state.selectedLanguage.language)+")\n    ")]),t._v(" "),n("v-card-text",[n("p",[t._v(" "+t._s(t.$t("settings.loginAdded")))]),t._v(" "),n("VTextAreaEmoji",{attrs:{label:t.$t("settings.slackKnowledge"),personalize:!0,emoji:!0},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading},on:{click:t.update}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),L=E.exports;r()(E,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:C.a,VSpacer:x.a});var O={name:"ChangeTextModal",props:{value:Boolean},data:function(){return{loading:!1,text:""}},mounted:function(){var t=this;this.text=JSON.parse(JSON.stringify(this.$store.state.welcomeMessages.find((function(a){return a.language===t.$store.state.selectedLanguage.id&&2===a.message_type})))).message},methods:{update:function(){var t=this;this.loading=!0,this.$org.updateText(this.text,this.$store.state.selectedLanguage.id).then((function(data){t.$emit("input",!1),t.$emit("emailUpdated"),t.$store.dispatch("showSnackbar",t.$t("settings.textChanged"))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.textCouldNotBeChanged"))})).finally((function(){t.loading=!1}))}}},N=Object(l.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.welcomeTextMessageHeader"))+" ("+t._s(t.$store.state.selectedLanguage.language)+")\n    ")]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.$t("settings.welcomeTextMessageDescr")))]),t._v(" "),n("VTextAreaEmoji",{attrs:{label:t.$t("settings.textMessageLabel"),personalize:!0,emoji:!1},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading},on:{click:t.update}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),T=N.exports;r()(N,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:C.a,VSpacer:x.a});var j={name:"ChangeSlackWelcomeMessage",props:{value:Boolean},data:function(){return{loading:!1,text:""}},mounted:function(){var t=this;this.text=JSON.parse(JSON.stringify(this.$store.state.welcomeMessages.find((function(a){return a.language===t.$store.state.selectedLanguage.id&&3===a.message_type})))).message},methods:{update:function(){var t=this;this.loading=!0,this.$org.updateSlackMessage(this.text,this.$store.state.selectedLanguage.id).then((function(data){t.$emit("input",!1),t.$emit("emailUpdated"),t.$store.dispatch("showSnackbar",t.$t("settings.slackWelcomeMessageChanged"))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.slackWelcomeMessageCouldNotChange"))})).finally((function(){t.loading=!1}))}}},B=Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.welcomeSlackMessageHeader"))+" ("+t._s(t.$store.state.selectedLanguage.language)+")\n    ")]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.$t("settings.welcomeSlackMessageDescr")))]),t._v(" "),n("VTextAreaEmoji",{attrs:{label:t.$t("settings.slackKnowledge"),personalize:!0,emoji:!0},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading},on:{click:t.update}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),W=B.exports;r()(B,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:C.a,VSpacer:x.a});var H={name:"ChangeSlackKnowledgeWelcomeMessage",props:{value:Boolean},data:function(){return{loading:!1,text:""}},mounted:function(){var t=this;this.text=JSON.parse(JSON.stringify(this.$store.state.welcomeMessages.find((function(a){return a.language===t.$store.state.selectedLanguage.id&&4===a.message_type})))).message},methods:{update:function(){var t=this;this.loading=!0,this.$org.updateSlackKnowMessage(this.text,this.$store.state.selectedLanguage.id).then((function(data){t.$emit("input",!1),t.$emit("emailUpdated"),t.$store.dispatch("showSnackbar",t.$t("settings.slackKnowledgeChanged"))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.slackKnowledgeCouldNotChange"))})).finally((function(){t.loading=!1}))}}},A=Object(l.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.knowledgeHeader"))+" ("+t._s(t.$store.state.selectedLanguage.language)+")\n    ")]),t._v(" "),n("v-card-text",[n("p",[t._v(" "+t._s(t.$t("settings.knowledgeDescr")))]),t._v(" "),n("VTextAreaEmoji",{attrs:{label:t.$t("settings.slackKnowledge"),personalize:!0,emoji:!0},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading},on:{click:t.update}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),D=A.exports;r()(A,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:C.a,VSpacer:x.a});var J={name:"LanguageOptions",components:{ChangePreBoardingModal:V,ChangeNewHireModal:L,ChangeTextModal:T,ChangeSlackWelcomeMessage:W,ChangeKnowledgeWelcomeMessage:D},data:function(){return{loading:!0,preboardingModal:!1,newHireModal:!1,textModal:!1,slackWelcomeModal:!1,slackKnowledgeModal:!1}},mounted:function(){var t=this;this.$org.getEmails().then((function(e){t.loading=!1}))},methods:{updateSelectedLanguage:function(t){this.$store.commit("updateSelectedLanguage",t)},emailUpdated:function(){var t=this;this.loading=!0,this.$org.getEmails().then((function(e){t.loading=!1}))}}},K=Object(l.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        "+t._s(t.$t("settings.languageSettings"))+"\n      ")])])],1),t._v(" "),n("v-card",{staticClass:"mb-4"},[t.loading?n("v-card-text",[n("LoadingIcon",{attrs:{"is-loading":t.loading}})],1):n("v-card-text",[n("v-select",{attrs:{value:t.$store.state.selectedLanguage,items:t.$store.state.languages,label:t.$t("settings.global.selectLanguage"),"item-value":"id","item-text":"language","return-object":""},on:{change:t.updateSelectedLanguage}}),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-btn",{on:{click:function(e){t.preboardingModal=!0}}},[t._v("\n          "+t._s(t.$t("settings.global.changePreBoardingEmail"))+"\n        ")]),t._v(" "),t.preboardingModal?n("ChangePreBoardingModal",{on:{emailUpdated:t.emailUpdated},model:{value:t.preboardingModal,callback:function(e){t.preboardingModal=e},expression:"preboardingModal"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-btn",{on:{click:function(e){t.newHireModal=!0}}},[t._v("\n          "+t._s(t.$t("settings.global.changeNewHireEmail"))+"\n        ")]),t._v(" "),t.newHireModal?n("ChangeNewHireModal",{on:{emailUpdated:t.emailUpdated},model:{value:t.newHireModal,callback:function(e){t.newHireModal=e},expression:"newHireModal"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-btn",{on:{click:function(e){t.textModal=!0}}},[t._v("\n          "+t._s(t.$t("settings.global.changeTextMessage"))+"\n        ")]),t._v(" "),t.textModal?n("ChangeTextModal",{on:{emailUpdated:t.emailUpdated},model:{value:t.textModal,callback:function(e){t.textModal=e},expression:"textModal"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-btn",{on:{click:function(e){t.slackWelcomeModal=!0}}},[t._v("\n          "+t._s(t.$t("settings.global.changeSlackWelcomeMessage"))+"\n        ")]),t._v(" "),t.slackWelcomeModal?n("ChangeSlackWelcomeMessage",{on:{emailUpdated:t.emailUpdated},model:{value:t.slackWelcomeModal,callback:function(e){t.slackWelcomeModal=e},expression:"slackWelcomeModal"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-btn",{on:{click:function(e){t.slackKnowledgeModal=!0}}},[t._v("\n          "+t._s(t.$t("settings.global.changeSlackKnowledgeMessage"))+"\n        ")]),t._v(" "),t.slackKnowledgeModal?n("ChangeKnowledgeWelcomeMessage",{on:{emailUpdated:t.emailUpdated},model:{value:t.slackKnowledgeModal,callback:function(e){t.slackKnowledgeModal=e},expression:"slackKnowledgeModal"}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null),P=K.exports;r()(K,{VBtn:v.a,VCard:m.a,VCardText:_.b,VCol:h.a,VRow:f.a,VSelect:$.a});var U={props:{org:{type:Object,default:function(){return{}}}},data:function(){return{saving:!1,company:{}}},mounted:function(){this.company={base_color:this.org.base_color,accent_color:this.org.accent_color,bot_color:this.org.bot_color,logo:this.org.logo}},methods:{save:function(){var t=this;this.savingCustom=!0,this.$org.updateGeneral(this.company).then((function(data){t.$store.dispatch("showSnackbar",t.$t("settings.global.customSaved")),t.$org.getOrganisation().then((function(data){t.savingCustom=!1}))})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.global.customNotSaved")),t.savingCustom=!1}))}}},z=n(879),R=n(216),G=Object(l.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        "+t._s(t.$t("settings.global.custom"))+"\n      ")])])],1),t._v(" "),n("v-card",{staticClass:"mb-4"},[n("v-card-text",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"dark",dark:""}},o),[t._v("\n            "+t._s(t.$t("settings.global.backgroundColor"))+"\n          ")])]}}])},[t._v(" "),n("v-card",[n("v-color-picker",{attrs:{mode:"hexa"},model:{value:t.company.base_color,callback:function(e){t.$set(t.company,"base_color",e)},expression:"company.base_color"}})],1)],1),t._v(" "),n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"dark",dark:""}},o),[t._v("\n            "+t._s(t.$t("settings.global.textColor"))+"\n          ")])]}}])},[t._v(" "),n("v-card",[n("v-color-picker",{attrs:{mode:"hexa"},model:{value:t.company.accent_color,callback:function(e){t.$set(t.company,"accent_color",e)},expression:"company.accent_color"}})],1)],1),t._v(" "),t.$store.state.org.slack_key?n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"dark",dark:""}},o),[t._v("\n            "+t._s(t.$t("settings.global.botColor"))+"\n          ")])]}}],null,!1,3809525254)},[t._v(" "),n("v-card",[n("v-color-picker",{attrs:{mode:"hexa"},model:{value:t.company.bot_color,callback:function(e){t.$set(t.company,"bot_color",e)},expression:"company.bot_color"}})],1)],1):t._e(),t._v(" "),n("v-file",{attrs:{logo:""},model:{value:t.company.logo,callback:function(e){t.$set(t.company,"logo",e)},expression:"company.logo"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{loading:t.saving,color:"success"},on:{click:t.save}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1),t._v(" "),n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        "+t._s(t.$t("settings.global.otherSettings"))+"\n      ")])])],1)],1)}),[],!1,null,null,null),I=G.exports;r()(G,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCol:h.a,VColorPicker:z.a,VMenu:R.a,VRow:f.a,VSpacer:x.a});var F={name:"AdditionalSettings",props:{org:{type:Object,default:function(){return{}}}},data:function(){return{saving:!1,company:{}}},mounted:function(){this.company=JSON.parse(JSON.stringify(this.org))},methods:{save:function(){var t=this;this.saving=!0,this.$org.updateGeneral(this.company).then((function(data){t.$store.dispatch("showSnackbar",t.$t("settings.global.billingSaved")),t.$store.commit("setOrg",data),t.$sequences.getAll()})).catch((function(e){t.errors=e,t.$store.dispatch("showSnackbar",t.$t("settings.global.billingNotSaved"))})).finally((function(){t.saving=!1}))}}},Q=n(716),X=n(650),Y=Object(l.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mb-4"},[n("v-card-text",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.alwaysSendNewHireWelcomeEmail")},model:{value:t.company.new_hire_email,callback:function(e){t.$set(t.company,"new_hire_email",e)},expression:"company.new_hire_email"}},o))]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.newHireLoginCred")))])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.loginWithGoogleLabel")},model:{value:t.company.google_login,callback:function(e){t.$set(t.company,"google_login",e)},expression:"company.google_login"}},o))]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.loginWithGoogle")))])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.sendEmailReminderLabel")},model:{value:t.company.new_hire_email_reminders,callback:function(e){t.$set(t.company,"new_hire_email_reminders",e)},expression:"company.new_hire_email_reminders"}},o))]}}])},[t._v(" "),n("span",[t._v(" "+t._s(t.$t("settings.global.sendEmailReminder")))])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.sendReminderWhenDueLabel")},model:{value:t.company.new_hire_email_overdue_reminders,callback:function(e){t.$set(t.company,"new_hire_email_overdue_reminders",e)},expression:"company.new_hire_email_overdue_reminders"}},o))]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.sendReminderWhenDue")))])]),t._v(" "),n("v-select",{attrs:{items:t.$store.state.sequences.all,label:t.$t("settings.global.addSequences"),"item-value":"id","item-text":"name",multiple:""},model:{value:t.company.auto_add_sequence,callback:function(e){t.$set(t.company,"auto_add_sequence",e)},expression:"company.auto_add_sequence"}}),t._v(" "),t.$store.state.org.slack_key?n("div",[n("h2",[t._v(" "+t._s(t.$t("settings.global.slackOptions")))]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.addButtonsLabel")},model:{value:t.company.slack_buttons,callback:function(e){t.$set(t.company,"slack_buttons",e)},expression:"company.slack_buttons"}},o))]}}],null,!1,3759936341)},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.addButtons")))])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.askWelcomeMessageLabel")},model:{value:t.company.ask_colleague_welcome_message,callback:function(e){t.$set(t.company,"ask_colleague_welcome_message",e)},expression:"company.ask_colleague_welcome_message"}},o))]}}],null,!1,1899838845)},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.askWelcomeMessage"))+" ")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-switch",t._g({attrs:{label:t.$t("settings.global.sendReminderNewHireIsStartingLabel")},model:{value:t.company.send_new_hire_start_reminder,callback:function(e){t.$set(t.company,"send_new_hire_start_reminder",e)},expression:"company.send_new_hire_start_reminder"}},o))]}}],null,!1,3910966375)},[t._v(" "),n("span",[t._v(t._s(t.$t("settings.global.sendReminderNewHireIsStarting")))])]),t._v(" "),n("v-switch",{attrs:{label:t.$t("settings.global.autoCreateUser")},model:{value:t.company.auto_create_user,callback:function(e){t.$set(t.company,"auto_create_user",e)},expression:"company.auto_create_user"}}),t._v(" "),n("v-switch",{attrs:{disabled:!t.company.auto_create_user,label:t.$t("settings.global.withoutConfirm")},model:{value:t.company.create_new_hire_without_confirm,callback:function(e){t.$set(t.company,"create_new_hire_without_confirm",e)},expression:"company.create_new_hire_without_confirm"}}),t._v(" "),n("v-select",{attrs:{disabled:t.company.create_new_hire_without_confirm||!t.company.auto_create_user,items:t.$store.state.employees.all.filter((function(a){return null!==a.slack_user_id&&""!==a.slack_user_id})),label:t.$t("settings.global.confirmPerson"),"item-value":"id","item-text":"full_name"},model:{value:t.company.slack_confirm_person,callback:function(e){t.$set(t.company,"slack_confirm_person",e)},expression:"company.slack_confirm_person"}})],1):t._e()],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"success",attrs:{loading:t.saving},on:{click:t.save}},[t._v("\n        "+t._s(t.$t("buttons.update"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),Z=Y.exports;r()(Y,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VSelect:$.a,VSpacer:x.a,VSwitch:Q.a,VTooltip:X.a});var tt={name:"ExportPart",data:function(){return{loading:!1,items:["preboarding","badges","to_do","resources","introductions","sequences","users","admin_tasks","appointments"],saving:!1,errors:{},jsonData:"",dialog:!1,item:"preboarding"}},methods:{save:function(){var t=this;this.saving=!0,this.$org.export(this.item).then((function(data){t.jsonData=JSON.stringify(data),t.dialog=!0})).catch((function(e){t.errors=e})).finally((function(){t.saving=!1}))}}},et=n(655),at=Object(l.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        Export\n      ")])])],1),t._v(" "),n("v-card",{staticClass:"mb-4 pt-2"},[n("v-card-text",[n("v-select",{attrs:{items:t.items,label:"What do you want to export?"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{loading:t.saving,color:"success"},on:{click:t.save}},[t._v("\n        Export\n      ")])],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-text",{staticClass:"pb-0"},[n("v-textarea",{model:{value:t.jsonData,callback:function(e){t.jsonData=e},expression:"jsonData"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          "+t._s(t.$t("buttons.close"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null),nt=at.exports;r()(at,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCol:h.a,VDialog:C.a,VRow:f.a,VSelect:$.a,VSpacer:x.a,VTextarea:et.a});var st={layout:"admin",components:{AdditionalSettings:Z,GeneralPart:w,LanguageTemplates:P,CustomizationPart:I,ExportPart:nt},data:function(){return{loading:!1,org:{}}},mounted:function(){var t=this;this.loading=!0,this.$org.getDetailOrgInfo().then((function(e){t.org=e,t.loading=!1}))}},ot=n(652),lt=Object(l.a)(st,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:"","fill-height":""}},[n("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():n("v-row",[n("v-col",{attrs:{sm:"6"}},[n("GeneralPart",{attrs:{org:t.org}}),t._v(" "),n("LanguageTemplates",{attrs:{org:t.org}}),t._v(" "),n("ExportPart")],1),t._v(" "),n("v-col",{attrs:{sm:"6"}},[n("CustomizationPart",{attrs:{org:t.org}}),t._v(" "),n("AdditionalSettings",{attrs:{org:t.org}})],1)],1)],1)}),[],!1,null,null,null);e.default=lt.exports;r()(lt,{VCol:h.a,VContainer:ot.a,VRow:f.a})}}]);