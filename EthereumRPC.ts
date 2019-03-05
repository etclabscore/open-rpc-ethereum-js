
import * as jayson from "jayson/promise";
import Djv from "djv";
import { zipObject } from "lodash";

export default class EthereumRPC {
  rpc: jayson.Client;

  constructor(options) {
    this.methods = [{"name":"eth_getBlockByHash","summary":"Gets a block for a given hash","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"includeTransactions","description":"If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.","required":true,"schema":{"type":"boolean"}}],"result":{"name":"block","description":"A block","schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"transactions":{"description":"Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter","type":"array","items":{"oneOf":[{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}]}},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_getBlockByNumber","summary":"Gets a block for a given number","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"includeTransactions","description":"If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.","required":true,"schema":{"type":"boolean"}}],"result":{"name":"block","description":"A block","schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"transactions":{"description":"Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter","type":"array","items":{"oneOf":[{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}]}},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_blockNumber","summary":"Gets a block for a given number","params":[],"result":{"name":"blockNumber","schema":{"type":"string","description":"Hex string representation of the current block number the client is on"}}},{"name":"eth_getStorageAt","summary":"Gets a storage value from a contract address, a position, and an optional blockNumber","params":[{"name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"key","required":true,"schema":{"type":"string","description":"Hex representation of the storage slot where the variable exists","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"}}},{"name":"eth_getTransactionCount","summary":"Returns the number of transactions sent from an address","params":[{"name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"name":"nonce","schema":{"description":"A number only to be used once","type":"string"}}}},{"name":"eth_getTransactionByHash","summary":"Returns the information about a transaction requested by transaction hash.","params":[{"name":"transactionHash","required":true,"schema":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}}}},{"name":"eth_getTransactionByBlockHashAndIndex","summary":"Returns the information about a transaction requested by the block hash and index of which it was mined.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"index","description":"The ordering in which a transaction is mined within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}}}},{"name":"eth_getTransactionByBlockNumberAndIndex","summary":"Returns the information about a transaction requested by the block hash and index of which it was mined.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"index","description":"The ordering in which a transaction is mined within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}}}},{"name":"eth_getTransactionReceipt","summary":"Returns the receipt information of a transaction by its hash.","params":[{"name":"transactionHash","required":true,"schema":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"object","description":"The receipt of a transaction","required":["blockHash","blockNumber","contractAddress","cumulativeGasUsed","from","gasUsed","logs","logsBloom","to","transactionHash","transactionIndex"],"properties":{"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"contractAddress":{"description":"The contract address created, if the transaction was a contract creation, otherwise null","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"cumulativeGasUsed":{"description":"The gas units used by the transaction","type":"string"},"from":{"description":"The sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gasUsed":{"description":"The total gas used by the transaction","type":"string"},"logs":{"type":"array","description":"An array of all the logs triggered during the transaction","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}},"logsBloom":{"type":"string","description":"A 2048 bit bloom filter from the logs of the transaction. Each log sets 3 bits though taking the low-order 11 bits of each of the first three pairs of bytes in a Keccak 256 hash of the log's byte series"},"to":{"description":"Destination address of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionHash":{"description":"Keccak 256 of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"An array of all the logs triggered during the transaction","type":"string"},"postTransactionState":{"description":"The intermediate stateRoot directly after transaction execution.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"status":{"description":"Whether or not the transaction threw an error.","type":"boolean"}}}}},{"name":"eth_getUncleByBlockHashAndIndex","summary":"Returns information about a uncle of a block by hash and uncle index position.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"index","description":"The ordering in which a uncle is included within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_getUncleByBlockNumberAndIndex","summary":"Returns information about a uncle of a block by hash and uncle index position.","params":[{"description":"The block in which the uncle was included","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"index","description":"The ordering in which a uncle is included within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_newFilter","summary":"Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.","params":[{"name":"filter","required":true,"schema":{"type":"object","description":"A filter used to monitor the blockchain for log/events","properties":{"fromBlock":{"description":"Block from which to begin filtering events","type":"string"},"toBlock":{"description":"Block from which to end filtering events","type":"string"},"address":{"oneOf":[{"type":"string","description":"Address of the contract from which to monitor events","pattern":"^0x[a-fA-F\\d]+$"},{"type":"array","description":"List of contract addresses from which to monitor events","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}}]},"topics":{"type":"array","description":"Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options","items":{"description":"Indexable 32 bytes piece of data (made from the event's function signature in solidity)","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"}}},{"name":"eth_newBlockFilter","summary":"Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.","params":[],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"}}},{"name":"eth_newPendingTransactionFilter","summary":"Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.","params":[],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"}}},{"name":"eth_uninstallFilter","summary":"Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"boolean","description":"Whether of not the filter was successfully uninstalled"}}},{"name":"eth_getFilterChanges","summary":"Polling method for a filter, which returns an array of logs which occurred since last poll.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}}}},{"name":"eth_getFilterLogs","summary":"Returns an array of all logs matching filter with given id.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}}}},{"name":"eth_getLogs","summary":"Returns an array of all logs matching a given filter object.","params":[{"name":"filter","required":true,"schema":{"type":"object","description":"A filter used to monitor the blockchain for log/events","properties":{"fromBlock":{"description":"Block from which to begin filtering events","type":"string"},"toBlock":{"description":"Block from which to end filtering events","type":"string"},"address":{"oneOf":[{"type":"string","description":"Address of the contract from which to monitor events","pattern":"^0x[a-fA-F\\d]+$"},{"type":"array","description":"List of contract addresses from which to monitor events","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}}]},"topics":{"type":"array","description":"Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options","items":{"description":"Indexable 32 bytes piece of data (made from the event's function signature in solidity)","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}}}},{"name":"eth_getWork","summary":"Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').","params":[],"result":{"schema":{"type":"array","items":[{"description":"Current block header PoW hash.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"description":"The seed hash used for the DAG.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"description":"The boundary condition ('target'), 2^256 / difficulty.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}]}}},{"name":"eth_submitWork","summary":"Used for submitting a proof-of-work solution.","params":[{"name":"nonce","schema":{"description":"A number only to be used once","type":"string"}},{"name":"powHash","schema":{"description":"Current block header PoW hash.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"mixHash","schema":{"description":"The mix digest.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"boolean","description":"Whether or not the provided solution is valid"}}},{"name":"eth_submitHashrate","summary":"Returns an array of all logs matching a given filter object.","params":[{"name":"hashRate","schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"id","description":"String identifiying the client","schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"boolean","description":"whether of not submitting went through succesfully"}}},{"name":"eth_getProof","summary":"Returns the account- and storage-values of the specified account including the Merkle-proof.","params":[{"description":"The address of the account or contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"storageKeys","schema":{"description":"The storage keys of all the storage slots being requested","items":{"description":"A storage key is indexed from the solidity compiler by the order it is declaired. For mappings it uses the keccak of the mapping key with its position (and recursively for X-dimentional mappings)","type":"string"}}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"object","description":"The requested datum with their merkle proofs connecting them to the blockhash of the block specified","properties":{"address":{"description":"The address of the account or contract of the request","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"accountProof":{"type":"array","description":"The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value","items":{"type":"string","description":"An indiviual node used to prove a path down a merkle-patricia-tree"}},"balance":{"description":"The Ether balance of the account or contract of the request","type":"string"},"codeHash":{"description":"The code hash of the contract of the request (keccak(NULL) if external account)","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"The transaction count of the account or contract of the request","type":"string"},"storageHash":{"description":"The storage hash of the contract of the request (keccak(rlp(NULL)) if external account)","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"storageProof":{"type":"array","description":"Current block header PoW hash.","items":{"type":"object","description":"Object proving a relationship of a storage value to an account's storageHash.","properties":{"key":{"description":"The key used to get the storage slot in its account tree","type":"string"},"value":{"description":"The value of the storage slot in its account tree","type":"string"},"proof":{"type":"array","description":"The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value","items":{"type":"string","description":"An indiviual node used to prove a path down a merkle-patricia-tree"}}}}}}}}},{"name":"eth_getCode","summary":"Returns code at a given contract address","params":[{"description":"The address of the contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"A BlockNumber of which the code existed","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of a variable length byte array"}}},{"name":"eth_getBalance","summary":"Returns Ether balance of a given or account or contract","params":[{"description":"The address of the acccount or contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"A BlockNumber at which to request the balance","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of the integer"}}},{"name":"eth_sign","summary":"The sign method calculates an Ethereum specific signature with: sign(keccak256( '\\x19Ethereum Signed Message:\n' + len(message) + message))).","params":[{"description":"The address of the account who's signature to use.","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"The message to sign","schema":{"type":"string","description":"Hex representation of a variable length byte array"}}],"result":{"schema":{"description":"The signature data.","type":"string"}}},{"name":"eth_account","summary":"Returns a list of accounts owned by the client","params":[],"result":{"schema":{"description":"An array of addresses owned by the client","type":"array","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}},{"name":"eth_gasPrice","summary":"Returns the current price per gas in wei","params":[],"result":{"schema":{"description":"Integer of the current gas price","type":"string"}}},{"name":"eth_hashrate","summary":"Returns the number of hashes per second that the node is mining with.","params":[],"result":{"schema":{"description":"Integer of the number of hashes per second","type":"string"}}},{"name":"eth_mining","summary":"Returns true if client is actively mining new blocks.","params":[],"result":{"schema":{"description":"Whether of not the client is mining","type":"boolean"}}},{"name":"eth_coinbase","summary":"Returns the client coinbase address.","params":[],"result":{"schema":{"description":"The address owned by the client that is used as default for things like the mining reward","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},{"name":"eth_protocolVersion","summary":"Returns the current ethereum protocol version.","params":[],"result":{"schema":{"description":"The current ethereum protocol version","type":"string"}}},{"name":"eth_blockTransactionCountByHash","summary":"Returns the number of transactions in a block from a block matching the given block hash.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}}],"result":{"schema":{"description":"The Number of total transactions in the given block","type":"string"}}},{"name":"eth_blockTransactionCountByNumber","summary":"Returns the number of transactions in a block from a block matching the given block number.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"description":"The Number of total transactions in the given block","type":"string"}}},{"name":"eth_getUncleCountByBlockHash","summary":"Returns the number of uncles in a block from a block matching the given block hash.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}}],"result":{"schema":{"description":"The Number of total uncles in the given block","type":"string"}}},{"name":"eth_getUncleCountByBlockNumber","summary":"Returns the number of uncles in a block from a block matching the given block number.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"description":"The Number of total uncles in the given block","type":"string"}}},{"name":"eth_sendTransaction","summary":"Creates new message call transaction or a contract creation, if the data field contains code.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The transaction hash, or the zero hash if the transaction is not yet available.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},{"name":"eth_sendRawTransaction","summary":"Creates new message call transaction or a contract creation for signed transactions.","params":[{"description":"The signed transaction data","schema":{"type":"string","description":"Hex representation of a variable length byte array"}}],"result":{"schema":{"description":"The transaction hash, or the zero hash if the transaction is not yet available.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},{"name":"eth_call","summary":"Executes a new message call (locally) immediately without creating a transaction on the block chain.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The return value of the executed contract","type":"string"}}},{"name":"eth_estimateGas","summary":"Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The amount of gas used","type":"string"}}},{"name":"eth_syncing","summary":"Returns an object with data about the sync status or false.","params":[],"result":{"schema":{"oneOf":[{"description":"An object with sync status data","type":"object","properties":{"startingBlock":{"description":"Block at which the import started (will only be reset, after the sync reached his head)","type":"string"},"currentBlock":{"description":"The current block, same as eth_blockNumber","type":"string"},"highestBlock":{"description":"The estimated highest block","type":"string"},"knownStates":{"description":"The known states","type":"string"},"pulledStates":{"description":"The pulled states","type":"string"}}},{"type":"boolean","description":"The value `false` indicating that syncing is complete"}]}}},{"name":"eth_getCompilers","summary":"Returns a list of available compilers in the client.","params":[],"result":{"schema":{"type":"array","description":"Array of available compilers.","items":{"description":"Name of an available compiler","type":"string"}}}},{"name":"eth_compileSolidity","summary":"Returns compiled solidity code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The Solidity code string (no new-lines)."}}],"result":{"schema":{"type":"object","description":"An object containing information about the code.","properties":{"code":{"description":"The compiled Byte code","type":"string"},"info":{"description":"An object contianing information about the code compilation.","type":"object","properties":{"source":{"type":"string","description":"The sorce code that was compiled"},"language":{"type":"string","description":"The language of the code that was compiled"},"languageVersion":{"type":"string","description":"The language version number"},"compilerVersion":{"type":"string","description":"The sorce code that was compiled"},"abiDefinition":{"type":"object","description":"The application binary interface definitions of the code"}}}}}}},{"name":"eth_compileLLL","summary":"Returns compiled LLL code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The LLL code string (no new-lines)."}}],"result":{"schema":{"description":"The compiled Byte code","type":"string"}}},{"name":"eth_compileSerpent","summary":"Returns compiled Serpent code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The Serpent code string (no new-lines)."}}],"result":{"schema":{"description":"The compiled Byte code","type":"string"}}}];
    if (options.transport === undefined || options.transport.type === undefined) {
      throw new Error("Invalid constructor params");
    }

    this.rpc = jayson.client[options.transport.type](options.transport);

    this.validators = {};
    this.methods.forEach((method) => {
      if (!method.params) {
        this.validators[method.name] = [];
        return;
      }
      this.validators[method.name] = method.params.map((param) => new Djv().addSchema(method.name, param.schema));
    });
  }

  
  eth_getBlockByHash(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getBlockByHash'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getBlockByHash", rpcParams);
  }

  
  eth_getBlockByNumber(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getBlockByNumber'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getBlockByNumber", rpcParams);
  }

  
  eth_blockNumber(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_blockNumber'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_blockNumber", rpcParams);
  }

  
  eth_getStorageAt(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getStorageAt'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getStorageAt", rpcParams);
  }

  
  eth_getTransactionCount(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getTransactionCount'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getTransactionCount", rpcParams);
  }

  
  eth_getTransactionByHash(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getTransactionByHash'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getTransactionByHash", rpcParams);
  }

  
  eth_getTransactionByBlockHashAndIndex(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getTransactionByBlockHashAndIndex'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getTransactionByBlockHashAndIndex", rpcParams);
  }

  
  eth_getTransactionByBlockNumberAndIndex(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getTransactionByBlockNumberAndIndex'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getTransactionByBlockNumberAndIndex", rpcParams);
  }

  
  eth_getTransactionReceipt(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getTransactionReceipt'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getTransactionReceipt", rpcParams);
  }

  
  eth_getUncleByBlockHashAndIndex(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getUncleByBlockHashAndIndex'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getUncleByBlockHashAndIndex", rpcParams);
  }

  
  eth_getUncleByBlockNumberAndIndex(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getUncleByBlockNumberAndIndex'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getUncleByBlockNumberAndIndex", rpcParams);
  }

  
  eth_newFilter(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_newFilter'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_newFilter", rpcParams);
  }

  
  eth_newBlockFilter(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_newBlockFilter'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_newBlockFilter", rpcParams);
  }

  
  eth_newPendingTransactionFilter(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_newPendingTransactionFilter'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_newPendingTransactionFilter", rpcParams);
  }

  
  eth_uninstallFilter(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_uninstallFilter'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_uninstallFilter", rpcParams);
  }

  
  eth_getFilterChanges(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getFilterChanges'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getFilterChanges", rpcParams);
  }

  
  eth_getFilterLogs(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getFilterLogs'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getFilterLogs", rpcParams);
  }

  
  eth_getLogs(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getLogs'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getLogs", rpcParams);
  }

  
  eth_getWork(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getWork'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getWork", rpcParams);
  }

  
  eth_submitWork(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_submitWork'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_submitWork", rpcParams);
  }

  
  eth_submitHashrate(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_submitHashrate'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_submitHashrate", rpcParams);
  }

  
  eth_getProof(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getProof'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getProof", rpcParams);
  }

  
  eth_getCode(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getCode'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getCode", rpcParams);
  }

  
  eth_getBalance(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getBalance'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getBalance", rpcParams);
  }

  
  eth_sign(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_sign'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_sign", rpcParams);
  }

  
  eth_account(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_account'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_account", rpcParams);
  }

  
  eth_gasPrice(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_gasPrice'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_gasPrice", rpcParams);
  }

  
  eth_hashrate(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_hashrate'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_hashrate", rpcParams);
  }

  
  eth_mining(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_mining'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_mining", rpcParams);
  }

  
  eth_coinbase(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_coinbase'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_coinbase", rpcParams);
  }

  
  eth_protocolVersion(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_protocolVersion'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_protocolVersion", rpcParams);
  }

  
  eth_blockTransactionCountByHash(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_blockTransactionCountByHash'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_blockTransactionCountByHash", rpcParams);
  }

  
  eth_blockTransactionCountByNumber(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_blockTransactionCountByNumber'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_blockTransactionCountByNumber", rpcParams);
  }

  
  eth_getUncleCountByBlockHash(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getUncleCountByBlockHash'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getUncleCountByBlockHash", rpcParams);
  }

  
  eth_getUncleCountByBlockNumber(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getUncleCountByBlockNumber'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getUncleCountByBlockNumber", rpcParams);
  }

  
  eth_sendTransaction(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_sendTransaction'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_sendTransaction", rpcParams);
  }

  
  eth_sendRawTransaction(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_sendRawTransaction'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_sendRawTransaction", rpcParams);
  }

  
  eth_call(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_call'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_call", rpcParams);
  }

  
  eth_estimateGas(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_estimateGas'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_estimateGas", rpcParams);
  }

  
  eth_syncing(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_syncing'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_syncing", rpcParams);
  }

  
  eth_getCompilers(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_getCompilers'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_getCompilers", rpcParams);
  }

  
  eth_compileSolidity(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_compileSolidity'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_compileSolidity", rpcParams);
  }

  
  eth_compileLLL(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_compileLLL'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_compileLLL", rpcParams);
  }

  
  eth_compileSerpent(...params: Array<any>): jayson.JSONRPCRequest {
    params.forEach((param, i) => this.validators['eth_compileSerpent'][i].validate(param));
    
    const rpcParams = params;
    
    return this.rpc.request("eth_compileSerpent", rpcParams);
  }

  
}
