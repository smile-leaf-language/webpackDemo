/**
 * Created by gaoyujuan on 2016/3/31.
 */
module.exports={
    entry:"./entry.js",
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:"style!css"}
        ]
    }

};