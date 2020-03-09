const isLocal = process.env.AWS_SAM_LOCAL;

const handlerModel = (body, headers, code) => {
    let response = {
        'statusCode': code,
        'body': JSON.stringify(body)
    }

    if(headers.length > 0) {
        response.headers = response.headers || {};
        headers.map(header => {
            key = Object.keys(header)[0];
            response.headers[key] = header[key];
        })
    }

    if (isLocal) {
        response.headers = response.headers || {};
        response.headers['Access-Control-Allow-Origin'] = "*"
    }
    
    return new Promise((res, rej) => {
        if(code === 500) rej(response)
        else res(response);
    })
}

exports.success = (body, headers = []) => {
    return handlerModel(body, headers, 200)
}

exports.fail = (body, headers = [], code = 500) => {
    return handlerModel(body, headers, code)
}