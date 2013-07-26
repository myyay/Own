var wjw_tree_menus=
{
  "identifier": "id",
  "label": "title",
  "items": [{
    "id": 0,
    "title": "Spring Security",
    "url": "toContent.do?contentUrl=dataPages/springsecurity",
    "items": [
      {
        "id": 1,
        "title": "序言",
        "url": "dataPages/preface.html",
        "items": []
      },
      {
        "id": 2,
        "title": "I. 入门",
        "url": "dataPages/getting-started.html",
        "items": [
          {
            "id": 6,
            "title": "1.介绍",
            "url": "dataPages/introduction.html",
            "items": [
              {
                "id": 32,
                "title": "1.1. Spring Security是什么？ ",
                "url": "dataPages/introduction.html#what-is-acegi-security",
                "items": []
              },
              {
                "id": 33,
                "title": "1.2. 历史",
                "url": "dataPages/introduction.html#history",
                "items": []
              },
              {
                "id": 34,
                "title": "1.3. 发行版本号",
                "url": "dataPages/introduction.html#release-numbering",
                "items": []
              },
              {
                "id": 35,
                "title": "1.4. 获得源代码",
                "url": "dataPages/introduction.html#get-source",
                "items": []
              }
            ]
          },
          {
            "id": 7,
            "title": "2. Security命名空间配置",
            "url": "dataPages/ns-config.html",
            "items": [
              {
                "id": 36,
                "title": "2.1. 介绍",
                "url": "dataPages/ns-config.html#d4e121",
                "items": [{
                  "id": 117,
                  "title": "2.1.1. 命名空间的设计",
                  "url": "dataPages/ns-config.html#d4e135",
                  "items": []
                }]
              },
              {
                "id": 37,
                "title": "2.2. 开始使用安全命名空间配置",
                "url": "dataPages/ns-config.html#ns-getting-started",
                "items": [
                  {
                    "id": 118,
                    "title": "2.2.1. 配置web.xml",
                    "url": "dataPages/ns-config.html#ns-web-xml",
                    "items": []
                  },
                  {
                    "id": 119,
                    "title": "2.2.2. 最小 <http>配置",
                    "url": "dataPages/ns-config.html#ns-minimal",
                    "items": [
                      {
                        "id": 167,
                        "title": "2.2.2.1. auto-config包含了什么？",
                        "url": "dataPages/ns-config.html#ns-auto-config",
                        "items": []
                      },
                      {
                        "id": 168,
                        "title": "2.2.2.2. 表单和基本登录选项",
                        "url": "dataPages/ns-config.html#ns-form-and-basic",
                        "items": []
                      }
                    ]
                  },
                  {
                    "id": 120,
                    "title": "2.2.3. 使用其他认证提供器",
                    "url": "dataPages/ns-config.html#ns-auth-providers",
                    "items": [{
                      "id": 169,
                      "title": "2.2.3.1. 添加一个密码编码器",
                      "url": "dataPages/ns-config.html#d4e247",
                      "items": []
                    }]
                  }
                ]
              },
              {
                "id": 38,
                "title": "2.3. 高级web特性",
                "url": "dataPages/ns-config.html#ns-web-advanced",
                "items": [
                  {
                    "id": 121,
                    "title": "2.3.1. Remember-Me认证",
                    "url": "dataPages/ns-config.html#ns-remember-me",
                    "items": []
                  },
                  {
                    "id": 122,
                    "title": "2.3.2. 添加HTTP/HTTPS信道安全",
                    "url": "dataPages/ns-config.html#ns-requires-channel",
                    "items": []
                  },
                  {
                    "id": 123,
                    "title": "2.3.3. 同步Session控制",
                    "url": "dataPages/ns-config.html#ns-concurrent-session",
                    "items": []
                  },
                  {
                    "id": 124,
                    "title": "2.3.4. OpenID登录",
                    "url": "dataPages/ns-config.html#ns-openid",
                    "items": []
                  },
                  {
                    "id": 125,
                    "title": "2.3.5. 添加你自己的filter",
                    "url": "dataPages/ns-config.html#ns-custom-filters",
                    "items": [{
                      "id": 170,
                      "title": "2.3.5.1. 设置自定义 AuthenticationEntryPoint",
                      "url": "dataPages/ns-config.html#ns-entry-point-ref",
                      "items": []
                    }]
                  },
                  {
                    "id": 126,
                    "title": "2.3.6. 防止Session固定攻击",
                    "url": "dataPages/ns-config.html#ns-session-fixation",
                    "items": []
                  }
                ]
              },
              {
                "id": 39,
                "title": "2.4. 保护方法",
                "url": "dataPages/ns-config.html#ns-method-security",
                "items": [
                  {
                    "id": 127,
                    "title": "2.4.1. <global-method-security>元素",
                    "url": "dataPages/ns-config.html#ns-global-method",
                    "items": [{
                      "id": 171,
                      "title": "2.4.1.1. 使用protect-pointcut添加安全切点",
                      "url": "dataPages/ns-config.html#ns-protect-pointcut",
                      "items": []
                    }]
                  },
                  {
                    "id": 128,
                    "title": "2.4.2. intercept-methods Bean 渲染器",
                    "url": "dataPages/ns-config.html#ns-intercept-methods",
                    "items": []
                  }
                ]
              },
              {
                "id": 40,
                "title": "2.5. 默认的AccessDecisionManager",
                "url": "dataPages/ns-config.html#ns-access-manager",
                "items": [{
                  "id": 129,
                  "title": "2.5.1. 自定义AccessDecisionManager",
                  "url": "dataPages/ns-config.html#ns-custom-access-mgr",
                  "items": []
                }]
              },
              {
                "id": 41,
                "title": "2.6. 默认验证管理器",
                "url": "dataPages/ns-config.html#ns-auth-manager",
                "items": []
              }
            ]
          },
          {
            "id": 8,
            "title": "3. 示例程序",
            "url": "dataPages/sample-apps.html",
            "items": [
              {
                "id": 42,
                "title": "3.1. Tutorial示例",
                "url": "dataPages/sample-apps.html#tutorial-sample",
                "items": []
              },
              {
                "id": 43,
                "title": "3.2. Contacts",
                "url": "dataPages/sample-apps.html#contacts-sample",
                "items": []
              },
              {
                "id": 44,
                "title": "3.3. LDAP例子",
                "url": "dataPages/sample-apps.html#ldap-sample",
                "items": []
              },
              {
                "id": 45,
                "title": "3.4. CAS例子",
                "url": "dataPages/sample-apps.html#cas-sample",
                "items": []
              },
              {
                "id": 46,
                "title": "3.5. Pre-Authentication例子",
                "url": "dataPages/sample-apps.html#preauth-sample",
                "items": []
              }
            ]
          },
          {
            "id": 9,
            "title": "4. Spring Security社区",
            "url": "dataPages/community.html",
            "items": [
              {
                "id": 47,
                "title": "4.1. 任务跟踪",
                "url": "dataPages/community.html#jira",
                "items": []
              },
              {
                "id": 48,
                "title": "4.2. 成为参与者",
                "url": "dataPages/community.html#becoming-involved",
                "items": []
              },
              {
                "id": 49,
                "title": "4.3. 更多信息",
                "url": "dataPages/community.html#further-info",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "title": "II. 总体结构",
        "url": "dataPages/overall-architecture.html",
        "items": [
          {
            "id": 10,
            "title": "5. 技术概述",
            "url": "dataPages/technical-overview.html",
            "items": [
              {
                "id": 50,
                "title": "5.1. 运行环境",
                "url": "dataPages/technical-overview.html#runtime-environment",
                "items": []
              },
              {
                "id": 51,
                "title": "5.2. 共享组件",
                "url": "dataPages/technical-overview.html#shared-components",
                "items": [
                  {
                    "id": 130,
                    "title": "5.2.1. SecurityContextHolder, SecurityContext 和 Authentication对象",
                    "url": "dataPages/technical-overview.html#d4e592",
                    "items": []
                  },
                  {
                    "id": 131,
                    "title": "5.2.2. UserDetailsService",
                    "url": "dataPages/technical-overview.html#d4e617",
                    "items": []
                  },
                  {
                    "id": 132,
                    "title": "5.2.3. GrantedAuthority",
                    "url": "dataPages/technical-overview.html#tech-granted-authority",
                    "items": []
                  },
                  {
                    "id": 133,
                    "title": "5.2.4. 小结",
                    "url": "dataPages/technical-overview.html#d4e661",
                    "items": []
                  }
                ]
              },
              {
                "id": 52,
                "title": "5.3. 验证",
                "url": "dataPages/technical-overview.html#d4e661",
                "items": [
                  {
                    "id": 134,
                    "title": "5.3.1. ExceptionTranslationFilter",
                    "url": "dataPages/technical-overview.html#d4e718",
                    "items": []
                  },
                  {
                    "id": 135,
                    "title": "5.3.2. AuthenticationEntryPoint",
                    "url": "dataPages/technical-overview.html#tech-auth-entry-point",
                    "items": []
                  },
                  {
                    "id": 136,
                    "title": "5.3.3. AuthenticationProvider",
                    "url": "dataPages/technical-overview.html#d4e734",
                    "items": []
                  },
                  {
                    "id": 137,
                    "title": "5.3.4. 直接设置SecurityContextHolder的内容",
                    "url": "dataPages/technical-overview.html#d4e755",
                    "items": []
                  }
                ]
              },
              {
                "id": 53,
                "title": "5.4. 安全对象",
                "url": "dataPages/technical-overview.html#secure-objects",
                "items": [
                  {
                    "id": 138,
                    "title": "5.4.1. 安全和AOP建议",
                    "url": "dataPages/technical-overview.html#secure-objects",
                    "items": []
                  },
                  {
                    "id": 139,
                    "title": "5.4.2. AbstractSecurityInterceptor",
                    "url": "dataPages/technical-overview.html#d4e774",
                    "items": [
                      {
                        "id": 172,
                        "title": "5.4.2.1. 配置属性是什么？",
                        "url": "dataPages/technical-overview.html#d4e798",
                        "items": []
                      },
                      {
                        "id": 173,
                        "title": "5.4.2.2. RunAsManager",
                        "url": "dataPages/5.4.2.2. RunAsManager",
                        "items": []
                      },
                      {
                        "id": 174,
                        "title": "5.4.2.3. AfterInvocationManager",
                        "url": "dataPages/5.4.2.3. AfterInvocationManager",
                        "items": []
                      },
                      {
                        "id": 175,
                        "title": "5.4.2.4. 扩展安全对象模型",
                        "url": "dataPages/5.4.2.4. 扩展安全对象模型",
                        "items": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 11,
            "title": "6. 支持的基础设施",
            "url": "dataPages/supporting-infrastructure.html",
            "items": [
              {
                "id": 54,
                "title": "6.1. 国际化",
                "url": "dataPages/6.1. 国际化",
                "items": []
              },
              {
                "id": 55,
                "title": "6.2. 过滤器",
                "url": "dataPages/supporting-infrastructure.html#filters",
                "items": []
              },
              {
                "id": 56,
                "title": "6.3. 标签库",
                "url": "dataPages/supporting-infrastructure.html#taglib",
                "items": [
                  {
                    "id": 140,
                    "title": "6.3.1. 配置",
                    "url": "dataPages/supporting-infrastructure.html#taglib-config",
                    "items": []
                  },
                  {
                    "id": 141,
                    "title": "6.3.2. 使用",
                    "url": "dataPages/supporting-infrastructure.html#taglib-usage",
                    "items": []
                  }
                ]
              }
            ]
          },
          {
            "id": 12,
            "title": "7. 信道安全",
            "url": "dataPages/channel-security.html",
            "items": [
              {
                "id": 57,
                "title": "7.1. 总述",
                "url": "dataPages/channel-security.html#channel-security-overview",
                "items": []
              },
              {
                "id": 58,
                "title": "7.2. 配置",
                "url": "dataPages/channel-security.html#channel-security-config",
                "items": []
              },
              {
                "id": 59,
                "title": "7.3. 总结",
                "url": "dataPages/channel-security.html#channel-security-conclusion",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "title": "III. 认证",
        "url": "dataPages/authentication.html",
        "items": [
          {
            "id": 13,
            "title": "8. 通用认证服务",
            "url": "dataPages/authentication-common-auth-services.html",
            "items": [
              {
                "id": 60,
                "title": "8.1. 机制，供应者和入口",
                "url": "dataPages/authentication-common-auth-services.html#mechanisms-providers-entry-points",
                "items": []
              },
              {
                "id": 61,
                "title": "8.2. UserDetails 和相关类型",
                "url": "dataPages/uthentication-common-auth-services.html#userdetails-and-associated-types",
                "items": [
                  {
                    "id": 142,
                    "title": "8.2.1. 内存里认证",
                    "url": "dataPages/authentication-common-auth-services.html#in-memory-service",
                    "items": []
                  },
                  {
                    "id": 143,
                    "title": "8.2.2. JDBC认证",
                    "url": "dataPages/authentication-common-auth-services.html#jdbc-service",
                    "items": [{
                      "id": 176,
                      "title": "8.2.2.1. 默认用户数据库表结构",
                      "url": "dataPages/authentication-common-auth-services.html#jdbc-default-schema",
                      "items": []
                    }]
                  }
                ]
              },
              {
                "id": 62,
                "title": "8.3. 并行会话处理",
                "url": "dataPages/authentication-common-auth-services.html#concurrent-sessions",
                "items": []
              },
              {
                "id": 63,
                "title": "8.4. 认证标签库",
                "url": "dataPages/authentication-common-auth-services.html#authentication-taglibs",
                "items": []
              }
            ]
          },
          {
            "id": 14,
            "title": "9. DAO认证提供器",
            "url": "dataPages/dao-provider.html",
            "items": [
              {
                "id": 64,
                "title": "9.1. 综述",
                "url": "dataPages/dao-provider.html#dao-provider-overview",
                "items": []
              },
              {
                "id": 65,
                "title": "9.2. 配置",
                "url": "dataPages/dao-provider.html#dao-provider-config",
                "items": []
              }
            ]
          },
          {
            "id": 15,
            "title": "10. LDAP认证",
            "url": "dataPages/ldap.html",
            "items": [
              {
                "id": 66,
                "title": "10.1. 综述",
                "url": "dataPages/ldap.html#ldap-overview",
                "items": []
              },
              {
                "id": 67,
                "title": "10.2. 在Spring Security里使用LDAP",
                "url": "dataPages/ldap.html#d4e1370",
                "items": []
              },
              {
                "id": 68,
                "title": "10.3. 配置LDAP服务器",
                "url": "dataPages/ldap.html#ldap-server",
                "items": [
                  {
                    "id": 144,
                    "title": "10.3.1. 使用嵌入测试服务器",
                    "url": "dataPages/ldap.html#d4e1393",
                    "items": []
                  },
                  {
                    "id": 145,
                    "title": "10.3.2. 使用绑定认证",
                    "url": "dataPages/ldap.html#d4e1404",
                    "items": []
                  },
                  {
                    "id": 146,
                    "title": "10.3.3. 读取授权",
                    "url": "dataPages/ldap.html#d4e1414",
                    "items": []
                  }
                ]
              },
              {
                "id": 69,
                "title": "10.4. 实现类",
                "url": "dataPages/ldap.html#d4e1442",
                "items": [
                  {
                    "id": 147,
                    "title": "10.4.1. LdapAuthenticator实现",
                    "url": "dataPages/ldap.html#ldap-ldap-authenticators",
                    "items": [
                      {
                        "id": 177,
                        "title": "10.4.1.1. 常用功能",
                        "url": "dataPages/ldap.html#ldap-ldap-authenticators-common",
                        "items": []
                      },
                      {
                        "id": 178,
                        "title": "10.4.1.2. BindAuthenticator",
                        "url": "dataPages/ldap.html#ldap-ldap-authenticators-bind",
                        "items": []
                      },
                      {
                        "id": 179,
                        "title": "10.4.1.3. PasswordComparisonAuthenticator",
                        "url": "dataPages/ldap.html#ldap-ldap-authenticators-password",
                        "items": []
                      },
                      {
                        "id": 180,
                        "title": "10.4.1.4. 活动目录认证",
                        "url": "dataPages/ldap.html#ldap-ldap-authenticators-active-directory",
                        "items": []
                      }
                    ]
                  },
                  {
                    "id": 148,
                    "title": "10.4.2. 链接到LDAP服务器",
                    "url": "dataPages/ldap.html#ldap-context-source",
                    "items": []
                  },
                  {
                    "id": 149,
                    "title": "10.4.3. LDAP搜索对象",
                    "url": "dataPages/ldap.html#ldap-searchobjects",
                    "items": [{
                      "id": 181,
                      "title": "10.4.3.1. FilterBasedLdapUserSearch",
                      "url": "dataPages/ldap.html#ldap-searchobjects-filter",
                      "items": []
                    }]
                  },
                  {
                    "id": 150,
                    "title": "10.4.4. LdapAuthoritiesPopulator",
                    "url": "dataPages/ldap.html#ldap-authorities",
                    "items": []
                  },
                  {
                    "id": 151,
                    "title": "10.4.5. Spring Bean配置",
                    "url": "dataPages/ldap.html#ldap-bean-config",
                    "items": []
                  },
                  {
                    "id": 152,
                    "title": "10.4.6. LDAP属性和自定义UserDetails",
                    "url": "dataPages/ldap.html#d4e1541",
                    "items": []
                  }
                ]
              }
            ]
          },
          {
            "id": 16,
            "title": "11. 表单认证机制",
            "url": "dataPages/form.html",
            "items": [
              {
                "id": 70,
                "title": "11.1. 概述",
                "url": "dataPages/form.html#form-overview",
                "items": []
              },
              {
                "id": 71,
                "title": "11.2. 配置",
                "url": "dataPages/form.html#form-config",
                "items": []
              }
            ]
          },
          {
            "id": 17,
            "title": "12. 基本认证机制",
            "url": "dataPages/basic.html",
            "items": [
              {
                "id": 72,
                "title": "12.1. 概述",
                "url": "dataPages/basic.html#basic-overview",
                "items": []
              },
              {
                "id": 73,
                "title": "12.2. 配置",
                "url": "dataPages/basic.html#basic-config",
                "items": []
              }
            ]
          },
          {
            "id": 18,
            "title": "13. 摘要式认证",
            "url": "dataPages/digest.html",
            "items": [
              {
                "id": 74,
                "title": "13.1. 概述",
                "url": "dataPages/digest.html#digest-overview",
                "items": []
              },
              {
                "id": 75,
                "title": "13.2. 配置",
                "url": "dataPages/digest.html#digest-config",
                "items": []
              }
            ]
          },
          {
            "id": 19,
            "title": "14. Remember-Me认证",
            "url": "dataPages/remember-me.html",
            "items": [
              {
                "id": 76,
                "title": "14.1. 概述",
                "url": "dataPages/remember-me.html#remember-me-overview",
                "items": []
              },
              {
                "id": 77,
                "title": "14.2. 简单基于散列标记的方法",
                "url": "dataPages/remember-me.html#remember-me-hash-token",
                "items": []
              },
              {
                "id": 78,
                "title": "14.3. 持久化标记方法",
                "url": "dataPages/remember-me.html#remember-me-persistent-token",
                "items": []
              },
              {
                "id": 79,
                "title": "14.4. Remember-Me接口和实现",
                "url": "dataPages/remember-me.html#remember-me-impls",
                "items": [
                  {
                    "id": 153,
                    "title": "14.4.1. TokenBasedRememberMeServices",
                    "url": "dataPages/remember-me.html#d4e1729",
                    "items": []
                  },
                  {
                    "id": 154,
                    "title": "14.4.2. PersistentTokenBasedRememberMeServices",
                    "url": "dataPages/remember-me.html#d4e1753",
                    "items": []
                  }
                ]
              }
            ]
          },
          {
            "id": 20,
            "title": "15. Java认证和授权服务（JAAS）供应器",
            "url": "dataPages/jaas.html",
            "items": [
              {
                "id": 80,
                "title": "15.1. 概述",
                "url": "dataPages/jaas.html#jaas-overview",
                "items": []
              },
              {
                "id": 81,
                "title": "15.2. 配置",
                "url": "dataPages/jaas.html#jaas-config",
                "items": [{
                  "id": 155,
                  "title": "15.2.1. JAAS CallbackHandler",
                  "url": "dataPages/jaas.html#jaas-callbackhandler",
                  "items": [{
                    "id": 182,
                    "title": "15.2.2. JAAS AuthorityGranter",
                    "url": "dataPages/jaas.html#jaas-authoritygranter",
                    "items": []
                  }]
                }]
              }
            ]
          },
          {
            "id": 21,
            "title": "16. 预认证场景",
            "url": "dataPages/preauth.html",
            "items": [
              {
                "id": 82,
                "title": "16.1. 预认证框架类",
                "url": "dataPages/preauth.html#d4e1854",
                "items": [
                  {
                    "id": 156,
                    "title": "16.1.1. AbstractPreAuthenticatedProcessingFilter",
                    "url": "dataPages/preauth.html#d4e1860",
                    "items": []
                  },
                  {
                    "id": 157,
                    "title": "16.1.2. AbstractPreAuthenticatedAuthenticationDetailsSource",
                    "url": "dataPages/preauth.html#d4e1867",
                    "items": [{
                      "id": 183,
                      "title": "16.1.2.1. J2eeBasedPreAuthenticatedWebAuthenticationDetailsSource",
                      "url": "dataPages/preauth.html#j2ee-preauth-details",
                      "items": []
                    }]
                  },
                  {
                    "id": 158,
                    "title": "16.1.3. PreAuthenticatedAuthenticationProvider",
                    "url": "dataPages/preauth.html#d4e1889",
                    "items": []
                  },
                  {
                    "id": 159,
                    "title": "16.1.4. PreAuthenticatedProcessingFilterEntryPoint",
                    "url": "dataPages/preauth.html#d4e1901",
                    "items": []
                  }
                ]
              },
              {
                "id": 83,
                "title": "16.2. 具体实现",
                "url": "dataPages/preauth.html#d4e1909",
                "items": [
                  {
                    "id": 160,
                    "title": "16.2.1. 请求头认证（Siteminder）",
                    "url": "dataPages/preauth.html#d4e1913",
                    "items": [{
                      "id": 184,
                      "title": "16.2.1.1. Siteminder示例配置",
                      "url": "dataPages/preauth.html#d4e1922",
                      "items": []
                    }]
                  },
                  {
                    "id": 161,
                    "title": "16.2.2. J2EE容器认证",
                    "url": "dataPages/preauth.html#d4e1932",
                    "items": []
                  }
                ]
              }
            ]
          },
          {
            "id": 22,
            "title": "17. 匿名认证",
            "url": "dataPages/anonymous.html",
            "items": [
              {
                "id": 84,
                "title": "17.1. 概述",
                "url": "dataPages/anonymous.html#anonymous-overview",
                "items": []
              },
              {
                "id": 85,
                "title": "17.2. 配置",
                "url": "dataPages/anonymous.html#anonymous-config",
                "items": []
              }
            ]
          },
          {
            "id": 23,
            "title": "18. X.509认证",
            "url": "dataPages/x509.html",
            "items": [
              {
                "id": 86,
                "title": "18.1. 概述",
                "url": "dataPages/x509.html#x509-overview",
                "items": []
              },
              {
                "id": 87,
                "title": "18.2. 把X.509认证添加到你的web系统中",
                "url": "dataPages/x509.html#d4e1998",
                "items": []
              },
              {
                "id": 88,
                "title": "18.3. 为tomcat配置SSL",
                "url": "dataPages/x509.html#x509-ssl-config",
                "items": []
              }
            ]
          },
          {
            "id": 24,
            "title": "19. CAS认证",
            "url": "dataPages/cas.html",
            "items": [
              {
                "id": 89,
                "title": "19.1. 概述",
                "url": "dataPages/cas.html#cas-overview",
                "items": []
              },
              {
                "id": 90,
                "title": "19.2. CAS是如何工作的",
                "url": "dataPages/cas.html#cas-how-it-works",
                "items": []
              },
              {
                "id": 91,
                "title": "19.3. 配置CAS客户端",
                "url": "dataPages/cas.html#cas-client",
                "items": []
              }
            ]
          },
          {
            "id": 25,
            "title": "20. 替换验证身份",
            "url": "dataPages/runas.html",
            "items": [
              {
                "id": 92,
                "title": "20.1. 概述",
                "url": "dataPages/runas.html#runas-overview",
                "items": []
              },
              {
                "id": 93,
                "title": "20.2. 配置",
                "url": "dataPages/runas.html#runas-config",
                "items": []
              }
            ]
          },
          {
            "id": 26,
            "title": "21. 容器适配器认证",
            "url": "dataPages/ca.html",
            "items": [
              {
                "id": 94,
                "title": "21.1. 概述",
                "url": "dataPages/ca.html#ca-overview",
                "items": []
              },
              {
                "id": 95,
                "title": "21.2. 适配器认证提供器",
                "url": "dataPages/ca.html#ca-adapter",
                "items": []
              },
              {
                "id": 96,
                "title": "21.3. Jetty",
                "url": "dataPages/ca.html#ca-jetty",
                "items": []
              },
              {
                "id": 97,
                "title": "21.4. JBoss",
                "url": "dataPages/ca.html#ca-jboss",
                "items": []
              },
              {
                "id": 98,
                "title": "21.5. Resin",
                "url": "dataPages/ca.html#ca-resin",
                "items": []
              },
              {
                "id": 99,
                "title": "21.6. Tomcat",
                "url": "dataPages/ca.html#ca-tomcat",
                "items": []
              }
            ]
          },
          {
            "id": 27,
            "title": "A. 安全数据库表结构",
            "url": "dataPages/appendix-schema.html",
            "items": [
              {
                "id": 100,
                "title": "A.1. User表",
                "url": "dataPages/appendix-schema.html#d4e2415",
                "items": [{
                  "id": 162,
                  "title": "A.1.1. 组权限",
                  "url": "dataPages/appendix-schema.html#d4e2420",
                  "items": []
                }]
              },
              {
                "id": 101,
                "title": "A.2. 持久登陆（Remember-Me）表",
                "url": "dataPages/appendix-schema.html#d4e2424",
                "items": []
              },
              {
                "id": 102,
                "title": "A.3. ACL表",
                "url": "dataPages/appendix-schema.html#d4e2430",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "title": "IV. 授权",
        "url": "dataPages/authorization.html",
        "items": [
          {
            "id": 28,
            "title": "22. 通用授权概念",
            "url": "dataPages/authorization-common.html",
            "items": [
              {
                "id": 103,
                "title": "22.1. 授权",
                "url": "dataPages/authorization-common.html#authorities",
                "items": []
              },
              {
                "id": 104,
                "title": "22.2. 处理预调用",
                "url": "dataPages/authorization-common.html#pre-invocation",
                "items": [{
                  "id": 163,
                  "title": "22.2.1. AccessDecisionManager",
                  "url": "dataPages/authorization-common.html#d4e2492",
                  "items": [{
                    "id": 185,
                    "title": "22.2.1.1. 基于投票的AccessDecisionManager实现",
                    "url": "dataPages/authorization-common.html#d4e2513",
                    "items": []
                  }]
                }]
              },
              {
                "id": 105,
                "title": "22.3. 处理后决定",
                "url": "dataPages/authorization-common.html#after-invocation",
                "items": [
                  {
                    "id": 164,
                    "title": "22.3.1. ACL-Aware AfterInvocationProviders",
                    "url": "dataPages/authorization-common.html#after-invocation-acl-aware",
                    "items": []
                  },
                  {
                    "id": 165,
                    "title": "22.3.2. ACL-Aware AfterInvocationProviders (老 ACL 模块)",
                    "url": "dataPages/authorization-common.html#after-invocation-acl-aware-old",
                    "items": []
                  }
                ]
              },
              {
                "id": 106,
                "title": "22.4. 授权标签库",
                "url": "dataPages/authorization-common.html#authorization-taglibs",
                "items": []
              }
            ]
          },
          {
            "id": 29,
            "title": "23. 安全对象实现",
            "url": "dataPages/secure-object-impls.html",
            "items": [
              {
                "id": 107,
                "title": "23.1. AOP联盟 (MethodInvocation) 安全拦截器",
                "url": "dataPages/secure-object-impls.html#aop-alliance",
                "items": [{
                  "id": 166,
                  "title": "23.1.1. 精确的 MethodSecurityIterceptor 配置",
                  "url": "dataPages/secure-object-impls.html#d4e2778",
                  "items": []
                }]
              },
              {
                "id": 108,
                "title": "23.2. AspectJ (JoinPoint) 安全拦截器",
                "url": "dataPages/secure-object-impls.html#aspectj",
                "items": []
              },
              {
                "id": 109,
                "title": "23.3. FilterInvocation 安全拦截器",
                "url": "dataPages/secure-object-impls.html#filter-invocation-authorization",
                "items": []
              }
            ]
          },
          {
            "id": 30,
            "title": "24. 领域对象安全",
            "url": "dataPages/domain-acls.html",
            "items": [
              {
                "id": 110,
                "title": "24.1. 概述 ",
                "url": "dataPages/domain-acls.html#domain-acls-overview",
                "items": []
              },
              {
                "id": 111,
                "title": "24.2. 关键概念 ",
                "url": "dataPages/domain-acls.html#domain-acls-key-concepts",
                "items": []
              },
              {
                "id": 112,
                "title": "24.3. 开始 ",
                "url": "dataPages/domain-acls.html#domain-acls-getting-started",
                "items": []
              }
            ]
          },
          {
            "id": 31,
            "title": "25. acegi到spring security的转换方式 ",
            "url": "dataPages/z-pathway-acegi-spring-security.html",
            "items": [
              {
                "id": 113,
                "title": "25.1. Spring Security是什么 ",
                "url": "dataPages/z-pathway-acegi-spring-security.html#z-p-what-is-spring-security-2-0",
                "items": []
              },
              {
                "id": 114,
                "title": "25.2. 目标 ",
                "url": "dataPages/z-pathway-acegi-spring-security.html#z-p-goal",
                "items": []
              },
              {
                "id": 115,
                "title": "25.3. 步骤 ",
                "url": "dataPages/z-pathway-acegi-spring-security.html#z-p-step",
                "items": []
              },
              {
                "id": 116,
                "title": "25.4. 总结 ",
                "url": "dataPages/z-pathway-acegi-spring-security.html#z-p-conclusion",
                "items": []
              }
            ]
          }
        ]
      }
    ]
  }]
}