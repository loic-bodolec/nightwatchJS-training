module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["tests"],
    // Running the remaining test steps/test cases is possible
    skip_testcases_on_fail: false,
    // See https://nightwatchjs.org/guide/working-with-page-objects/
    page_objects_path: "pageObjects",
    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
    custom_commands_path: "./commands",
    // To enable screenshots for test failures/errors
    screenshots: {
        enabled: true,
        path: "./screenshots",
        on_failure: true,
        on_error: true
    },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    prefs: {
                        download: {
                            default_directory: require('path').resolve(__dirname + '/download')
                        }
                    }
                },
            },
            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('chromedriver').path,
            }
        },

        test_workers: {
            enabled: true,
            workers: 'auto'
        },

        safari: {
            desiredCapabilities: {
                browserName: 'safari',
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                port: 4445,
                start_process: true,
                server_path: '/usr/bin/safaridriver'
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            },
            webdriver: {
                start_process: true,
                port: 4446,
                server_path: require('geckodriver').path
            }
        }
    }
}