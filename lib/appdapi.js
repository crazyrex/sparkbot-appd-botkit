var request = require("request");

module.exports = function(config) {

    var appdAPI = {
        events: {
            get: function(appID, cb) {
                var eventTypes = 'APPLICATION_ERROR,APP_SERVER_RESTART';
                //var eventTypes = 'ACTIVITY_TRACE,ADJUDICATION_CANCELLED,AGENT_ADD_BLACKLIST_REG_LIMIT_REACHED,AGENT_ASYNC_ADD_REG_LIMIT_REACHED,AGENT_CONFIGURATION_ERROR,APPLICATION_CRASH,AGENT_DIAGNOSTICS,AGENT_ERROR_ADD_REG_LIMIT_REACHED,AGENT_EVENT,AGENT_METRIC_BLACKLIST_REG_LIMIT_REACHED,AGENT_METRIC_REG_LIMIT_REACHED,AGENT_STATUS,ALREADY_ADJUDICATED,APPDYNAMICS_DATA,APPDYNAMICS_INTERNAL_DIAGNOSTICS,APPLICATION_CONFIG_CHANGE,APPLICATION_DEPLOYMENT,APPLICATION_DISCOVERED,APPLICATION_ERROR,APP_SERVER_RESTART,AZURE_AUTO_SCALING,BACKEND_DISCOVERED,BT_DISCOVERED,BUSINESS_ERROR,CLR_CRASH,CONTROLLER_AGENT_VERSION_INCOMPATIBILITY,CONTROLLER_ASYNC_ADD_REG_LIMIT_REACHED,CONTROLLER_COLLECTIONS_ADD_REG_LIMIT_REACHED,CONTROLLER_ERROR_ADD_REG_LIMIT_REACHED,CONTROLLER_EVENT_UPLOAD_LIMIT_REACHED,CONTROLLER_MEMORY_ADD_REG_LIMIT_REACHED,CONTROLLER_METADATA_REGISTRATION_LIMIT_REACHED,CONTROLLER_METRIC_DATA_BUFFER_OVERFLOW,CONTROLLER_METRIC_REG_LIMIT_REACHED,CONTROLLER_PSD_UPLOAD_LIMIT_REACHED,CONTROLLER_RSD_UPLOAD_LIMIT_REACHED,CONTROLLER_SEP_ADD_REG_LIMIT_REACHED,CONTROLLER_STACKTRACE_ADD_REG_LIMIT_REACHED,CONTROLLER_TRACKED_OBJECT_ADD_REG_LIMIT_REACHED,CUSTOM,CUSTOM_ACTION_END,CUSTOM_ACTION_FAILED,CUSTOM_ACTION_STARTED,CUSTOM_EMAIL_ACTION_END,CUSTOM_EMAIL_ACTION_FAILED,CUSTOM_EMAIL_ACTION_STARTED,DEADLOCK,DEV_MODE_CONFIG_UPDATE,DIAGNOSTIC_SESSION,DISK_SPACE,EMAIL_ACTION_FAILED,EMAIL_SENT,EUM_CLOUD_BROWSER_EVENT,EUM_CLOUD_SYNTHETIC_BROWSER_EVENT,EUM_INTERNAL_ERROR,HTTP_REQUEST_ACTION_FAILED,INFO_INSTRUMENTATION_VISIBILITY,INTERNAL_UI_EVENT,JIRA_ACTION_END,JIRA_ACTION_FAILED,JIRA_ACTION_STARTED,LICENSE,MACHINE_AGENT_LOG,MACHINE_DISCOVERED,MEMORY,MEMORY_LEAK_DIAGNOSTICS,MOBILE_CRASH_IOS_EVENT,MOBILE_CRASH_ANDROID_EVENT,NETWORK,NODE_DISCOVERED,NORMAL,OBJECT_CONTENT_SUMMARY,POLICY_CANCELED_CRITICAL,POLICY_CANCELED_WARNING,POLICY_CLOSE_CRITICAL,POLICY_CLOSE_WARNING,POLICY_CONTINUES_CRITICAL,POLICY_CONTINUES_WARNING,POLICY_DOWNGRADED,POLICY_OPEN_CRITICAL,POLICY_OPEN_WARNING,POLICY_UPGRADED,RESOURCE_POOL_LIMIT,RUN_LOCAL_SCRIPT_ACTION_END,RUN_LOCAL_SCRIPT_ACTION_FAILED,RUN_LOCAL_SCRIPT_ACTION_STARTED,SERVICE_ENDPOINT_DISCOVERED,SLOW,SMS_SENT,STALL,SYSTEM_LOG,THREAD_DUMP_ACTION_END,THREAD_DUMP_ACTION_FAILED,THREAD_DUMP_ACTION_STARTED,TIER_DISCOVERED,VERY_SLOW,WARROOM_NOTE,WORKFLOW_ACTION_END,WORKFLOW_ACTION_FAILED,WORKFLOW_ACTION_STARTED';
                var resource = '/controller/rest/applications/'+ appID + '/events?output=JSON&time-range-type=BEFORE_NOW&duration-in-mins=10080&event-types=' + eventTypes + '&severities=INFO,WARN,ERROR';

                request.get(config.baseURL + resource, cb).auth(config.username, config.password);
            }
        },
        applications: {
            get: function(appID, cb) {
                var resource = '/controller/rest/applications/'+ appID + '?output=JSON'

                request.get(config.baseURL + resource, cb).auth(config.username, config.password);
            },
            getall: function(cb) {
                var resource = '/controller/rest/applications?output=JSON'

                request.get(config.baseURL + resource, cb).auth(config.username, config.password);
            }
        },
        metrics: {
            get: function(appID, metricPath, minutes, cb) {
                var resource = '/controller/rest/applications/'+ appID + '/metric-data?metric-path=' + metricPath + '&time-range-type=BEFORE_NOW&duration-in-mins=' + minutes + '&output=JSON'

                request.get(config.baseURL + resource, cb).auth(config.username, config.password);
            }
        }
    };

    return appdAPI;
};