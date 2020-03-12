export default {
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "notes-app-api-dev-serverlessdeploymentbucket-3kxfgmdotr99"
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://mhb0nsaj98.execute-api.ap-northeast-2.amazonaws.com/dev/"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_Wd6PUfwqB",
      APP_CLIENT_ID: "48v8eefditsi4m2lemia1utaqa",
      IDENTITY_POOL_ID: "ap-northeast-2:ceef5465-45d3-473c-8a94-3c473513ba92"
    }


    // s3: {
    //     REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    //     BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    //   },
    //   apiGateway: {
    //     REGION: "YOUR_API_GATEWAY_REGION",
    //     URL: "YOUR_API_GATEWAY_URL"
    //   },
    //   cognito: {
    //     REGION: "YOUR_COGNITO_REGION",
    //     USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
    //     APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
    //     IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    //   }


  };