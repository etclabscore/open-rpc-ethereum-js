"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jayson = __importStar(require("jayson/promise"));
class OpenRPCEthereum {
    constructor(options) {
        if (options.transport === undefined || options.transport.type === undefined) {
            throw new Error("Invalid constructor params");
        }
        this.rpc = jayson.client[options.transport.type](options.transport);
    }
    eth_getBlockByHash(...params) {
        return this.rpc.request("eth_getBlockByHash", params);
    }
}
exports.default = OpenRPCEthereum;
//# sourceMappingURL=OpenRPCEthereum.js.map