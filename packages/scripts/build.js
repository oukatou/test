#! /usr/bin/env node
require('@whd/scripts/lib/scripts.js')().catch(error=>{
    console.error(error);
    process.exit(1);
})