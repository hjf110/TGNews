/**
 * Created by shunchen_yang on 16/10/25.
 */
UE.registerUI('dialog', function (editor, uiName) {
    var btn = new UE.ui.Button({
        name   : 'xiumi-connect',
        title  : '秀米编辑',
        onclick: function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl: '../../dist/ueditor1_4_3_3-utf8-jsp/utf8-jsp/dialogs/xiumi/xiumi-ue-dialog-v5.html',
                // iframeUrl:"https://xiumi.us/#/",
                editor   : editor,
                name     : 'xiumi-connect',
                title    : "秀米编辑",
                cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
            });
            dialog.render();
            dialog.open();

            //
            // var dialog2 = new UE.ui.Dialog({
            //     iframeUrl: '../../dist/ueditor1_4_3_3-utf8-jsp/utf8-jsp/dialogs/xiumi/xiumi-ue-dialog-v5.html',
            //     // iframeUrl:"http://hgs.xiumi.us/uedit/xiumi-ue-dialog-v5.html",
            //     editor   : editor,
            //     name     : 'xiumi-connect',
            //     title    : "秀米编辑",
            //     cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
            // });
            // dialog2.render();
            // dialog2.open();
        }
    });

    return btn;
});
