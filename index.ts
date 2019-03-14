
import * as jayson from "jayson/promise";
import ajv from "ajv";
import _ from "lodash";
import { makeIdForMethodContentDescriptors } from "@open-rpc/schema-utils-js";

class ParameterValidationError extends Error {
  constructor(public message: string, public errors: Array<ajv.ErrorObject> | undefined | null) {
    super(message);
  }
}

/**
 * The hex representation of the Keccak 256 of the RLP encoded block
 */
export type TBlockHash = string;
export type TIncludeTransactions = boolean;
export interface IBlock {
  /**
   * The block number or null when its the pending block
   */
  number?: string | null;
  /**
   * The block hash or null when its the pending block
   */
  hash?: string | null;
  /**
   * Hash of the parent block
   */
  parentHash?: string;
  /**
   * Randomly selected number to satisfy the proof-of-work or null when its the pending block
   */
  nonce?: string | null;
  /**
   * Keccak hash of the uncles data in the block
   */
  sha3Uncles?: string;
  /**
   * The bloom filter for the logs of the block or null when its the pending block
   */
  logsBloom?: string;
  /**
   * The root of the transactions trie of the block.
   */
  transactionsRoot?: string;
  /**
   * The root of the final state trie of the block
   */
  stateRoot?: string;
  /**
   * The root of the receipts trie of the block
   */
  receiptsRoot?: string;
  /**
   * The address of the beneficiary to whom the mining rewards were given or null when its the pending block
   */
  miner?: string | null;
  /**
   * Integer of the difficulty for this block
   */
  difficulty?: string;
  /**
   * Integer of the total difficulty of the chain until this block
   */
  totalDifficulty?: string | null;
  /**
   * The 'extra data' field of this block
   */
  extraData?: string;
  /**
   * Integer the size of this block in bytes
   */
  size?: string;
  /**
   * The maximum gas allowed in this block
   */
  gasLimit?: string;
  /**
   * The total used gas by all transactions in this block
   */
  gasUsed?: string;
  /**
   * The unix timestamp for when the block was collated
   */
  timestamp?: string;
  /**
   * Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter
   */
  transactions?: (
    | {
        /**
         * Hash of the block where this transaction was in. null when its pending
         */
        blockHash?: string | null;
        /**
         * Block number where this transaction was in. null when its pending
         */
        blockNumber?: string | null;
        /**
         * Address of the sender
         */
        from?: string;
        /**
         * The gas limit provided by the sender in Wei
         */
        gas?: string;
        /**
         * The gas price willing to be paid by the sender in Wei
         */
        gasPrice?: string;
        /**
         * Keccak 256 Hash of the RLP encoding of a transaction
         */
        hash?: string;
        /**
         * The data field sent with the transaction
         */
        input?: string;
        /**
         * The total number of prior transactions made by the sender
         */
        nonce?: string;
        /**
         * address of the receiver. null when its a contract creation transaction
         */
        to?: string;
        /**
         * Integer of the transaction's index position in the block. null when its pending
         */
        transactionIndex?: string | null;
        /**
         * Value of Ether being transferred in Wei
         */
        value?: string;
        /**
         * ECDSA recovery id
         */
        v?: string;
        /**
         * ECDSA signature r
         */
        r?: string;
        /**
         * ECDSA signature s
         */
        s?: string;
        [k: string]: any;
      }
    | string)[];
  /**
   * Array of uncle hashes
   */
  uncles?: string[];
  [k: string]: any;
}
export type TBlockNumber = string | ("earliest" | "latest" | "pending");
export type TAddress = string;
/**
 * Hex representation of the storage slot where the variable exists
 */
export type TKey = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export type TBROKEN = string;
/**
 * Keccak 256 Hash of the RLP encoding of a transaction
 */
export type TTransactionHash = string;
export interface IBROKEN {
  /**
   * Hash of the block where this transaction was in. null when its pending
   */
  blockHash?: string | null;
  /**
   * Block number where this transaction was in. null when its pending
   */
  blockNumber?: string | null;
  /**
   * Address of the sender
   */
  from?: string;
  /**
   * The gas limit provided by the sender in Wei
   */
  gas?: string;
  /**
   * The gas price willing to be paid by the sender in Wei
   */
  gasPrice?: string;
  /**
   * Keccak 256 Hash of the RLP encoding of a transaction
   */
  hash?: string;
  /**
   * The data field sent with the transaction
   */
  input?: string;
  /**
   * The total number of prior transactions made by the sender
   */
  nonce?: string;
  /**
   * address of the receiver. null when its a contract creation transaction
   */
  to?: string;
  /**
   * Integer of the transaction's index position in the block. null when its pending
   */
  transactionIndex?: string | null;
  /**
   * Value of Ether being transferred in Wei
   */
  value?: string;
  /**
   * ECDSA recovery id
   */
  v?: string;
  /**
   * ECDSA signature r
   */
  r?: string;
  /**
   * ECDSA signature s
   */
  s?: string;
  [k: string]: any;
}
/**
 * Hex representation of the integer
 */
export type TIndex = string;
/**
 * A filter used to monitor the blockchain for log/events
 */
export interface IFilter {
  /**
   * Block from which to begin filtering events
   */
  fromBlock?: string;
  /**
   * Block from which to end filtering events
   */
  toBlock?: string;
  address?: string | string[];
  /**
   * Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options
   */
  topics?: string[];
  [k: string]: any;
}
/**
 * An identifier used to reference the filter.
 */
export type TFilterId = string;
/**
 * A number only to be used once
 */
export type TNonce = string;
/**
 * Current block header PoW hash.
 */
export type TPowHash = string;
/**
 * The mix digest.
 */
export type TMixHash = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export type THashRate = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export type TId = string;
/**
 * The storage keys of all the storage slots being requested
 */
export type TStorageKeys = string[];
export interface ITransaction {
  /**
   * Address of the sender
   */
  from?: string;
  /**
   * address of the receiver. optional if it's a contract creation transaction
   */
  to?: string;
  /**
   * The gas limit provided by the sender in Wei. default 90000
   */
  gas?: string;
  /**
   * The gas price willing to be paid by the sender in Wei
   */
  gasPrice?: string;
  /**
   * Value of Ether being transferred in Wei
   */
  value?: string;
  /**
   * The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.
   */
  data?: string;
  /**
   * The total number of prior transactions made by the sender.
   */
  nonce?: string;
  [k: string]: any;
}
/**
 * The Solidity code string (no new-lines).
 */
export type TCode = string;


export default class MultiGethRpc {
  rpc: jayson.Client;
  methods: Array<any>;
  validator: ajv.Ajv;

  constructor(options: any) {
    this.methods = [{"name":"eth_getBlockByHash","summary":"Gets a block for a given hash","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"includeTransactions","description":"If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.","required":true,"schema":{"type":"boolean"}}],"result":{"name":"block","description":"A block","schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"transactions":{"description":"Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter","type":"array","items":{"oneOf":[{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}]}},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_getBlockByNumber","summary":"Gets a block for a given number","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"includeTransactions","description":"If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.","required":true,"schema":{"type":"boolean"}}],"result":{"name":"block","description":"A block","schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"transactions":{"description":"Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter","type":"array","items":{"oneOf":[{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}]}},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}},{"name":"eth_blockNumber","summary":"Gets a block for a given number","params":[],"result":{"name":"blockNumber","schema":{"type":"string","description":"Hex string representation of the current block number the client is on"}}},{"name":"eth_getStorageAt","summary":"Gets a storage value from a contract address, a position, and an optional blockNumber","params":[{"name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"key","required":true,"schema":{"type":"string","description":"Hex representation of the storage slot where the variable exists","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"},"name":"BROKEN"}},{"name":"eth_getTransactionCount","summary":"Returns the number of transactions sent from an address","params":[{"name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"name":"nonce","schema":{"description":"A number only to be used once","type":"string"}},"name":"BROKEN"}},{"name":"eth_getTransactionByHash","summary":"Returns the information about a transaction requested by transaction hash.","params":[{"name":"transactionHash","required":true,"schema":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},"name":"BROKEN"}},{"name":"eth_getTransactionByBlockHashAndIndex","summary":"Returns the information about a transaction requested by the block hash and index of which it was mined.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"index","description":"The ordering in which a transaction is mined within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},"name":"BROKEN"}},{"name":"eth_getTransactionByBlockNumberAndIndex","summary":"Returns the information about a transaction requested by the block hash and index of which it was mined.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"index","description":"The ordering in which a transaction is mined within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"blockHash":{"description":"Hash of the block where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"blockNumber":{"description":"Block number where this transaction was in. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"hash":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"},"input":{"type":"string","description":"The data field sent with the transaction"},"nonce":{"description":"The total number of prior transactions made by the sender","type":"string"},"to":{"description":"address of the receiver. null when its a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"Integer of the transaction's index position in the block. null when its pending","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"v":{"type":"string","description":"ECDSA recovery id"},"r":{"type":"string","description":"ECDSA signature r"},"s":{"type":"string","description":"ECDSA signature s"}}},"name":"BROKEN"}},{"name":"eth_getTransactionReceipt","summary":"Returns the receipt information of a transaction by its hash.","params":[{"name":"transactionHash","required":true,"schema":{"type":"string","description":"Keccak 256 Hash of the RLP encoding of a transaction","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"object","description":"The receipt of a transaction","required":["blockHash","blockNumber","contractAddress","cumulativeGasUsed","from","gasUsed","logs","logsBloom","to","transactionHash","transactionIndex"],"properties":{"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"contractAddress":{"description":"The contract address created, if the transaction was a contract creation, otherwise null","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"cumulativeGasUsed":{"description":"The gas units used by the transaction","type":"string"},"from":{"description":"The sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gasUsed":{"description":"The total gas used by the transaction","type":"string"},"logs":{"type":"array","description":"An array of all the logs triggered during the transaction","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}},"logsBloom":{"type":"string","description":"A 2048 bit bloom filter from the logs of the transaction. Each log sets 3 bits though taking the low-order 11 bits of each of the first three pairs of bytes in a Keccak 256 hash of the log's byte series"},"to":{"description":"Destination address of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionHash":{"description":"Keccak 256 of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"An array of all the logs triggered during the transaction","type":"string"},"postTransactionState":{"description":"The intermediate stateRoot directly after transaction execution.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"status":{"description":"Whether or not the transaction threw an error.","type":"boolean"}}},"name":"BROKEN"}},{"name":"eth_getUncleByBlockHashAndIndex","summary":"Returns information about a uncle of a block by hash and uncle index position.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}},{"name":"index","description":"The ordering in which a uncle is included within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}},"name":"BROKEN"}},{"name":"eth_getUncleByBlockNumberAndIndex","summary":"Returns information about a uncle of a block by hash and uncle index position.","params":[{"description":"The block in which the uncle was included","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}},{"name":"index","description":"The ordering in which a uncle is included within its block.","required":true,"schema":{"type":"string","description":"Hex representation of the integer"}}],"result":{"schema":{"type":"object","properties":{"number":{"description":"The block number or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"hash":{"description":"The block hash or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of a Keccak 256 hash","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"parentHash":{"description":"Hash of the parent block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"Randomly selected number to satisfy the proof-of-work or null when its the pending block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"sha3Uncles":{"description":"Keccak hash of the uncles data in the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"logsBloom":{"type":"string","description":"The bloom filter for the logs of the block or null when its the pending block","pattern":"^0x[a-fA-F\\d]+$"},"transactionsRoot":{"description":"The root of the transactions trie of the block.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"stateRoot":{"description":"The root of the final state trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"receiptsRoot":{"description":"The root of the receipts trie of the block","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"miner":{"description":"The address of the beneficiary to whom the mining rewards were given or null when its the pending block","oneOf":[{"type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"type":"null","description":"Null"}]},"difficulty":{"type":"string","description":"Integer of the difficulty for this block"},"totalDifficulty":{"description":"Integer of the total difficulty of the chain until this block","oneOf":[{"type":"string","description":"Hex representation of the integer"},{"type":"null","description":"Null"}]},"extraData":{"type":"string","description":"The 'extra data' field of this block"},"size":{"type":"string","description":"Integer the size of this block in bytes"},"gasLimit":{"type":"string","description":"The maximum gas allowed in this block"},"gasUsed":{"type":"string","description":"The total used gas by all transactions in this block"},"timestamp":{"type":"string","description":"The unix timestamp for when the block was collated"},"uncles":{"description":"Array of uncle hashes","type":"array","items":{"description":"Block hash of the RLP encoding of an uncle block","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}},"name":"BROKEN"}},{"name":"eth_newFilter","summary":"Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.","params":[{"name":"filter","required":true,"schema":{"type":"object","description":"A filter used to monitor the blockchain for log/events","properties":{"fromBlock":{"description":"Block from which to begin filtering events","type":"string"},"toBlock":{"description":"Block from which to end filtering events","type":"string"},"address":{"oneOf":[{"type":"string","description":"Address of the contract from which to monitor events","pattern":"^0x[a-fA-F\\d]+$"},{"type":"array","description":"List of contract addresses from which to monitor events","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}}]},"topics":{"type":"array","description":"Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options","items":{"description":"Indexable 32 bytes piece of data (made from the event's function signature in solidity)","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"},"name":"BROKEN"}},{"name":"eth_newBlockFilter","summary":"Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.","params":[],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"},"name":"BROKEN"}},{"name":"eth_newPendingTransactionFilter","summary":"Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.","params":[],"result":{"schema":{"description":"The filter ID for use in `eth_getFilterChanges`","type":"string"},"name":"BROKEN"}},{"name":"eth_uninstallFilter","summary":"Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"boolean","description":"Whether of not the filter was successfully uninstalled"},"name":"BROKEN"}},{"name":"eth_getFilterChanges","summary":"Polling method for a filter, which returns an array of logs which occurred since last poll.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}},"name":"BROKEN"}},{"name":"eth_getFilterLogs","summary":"Returns an array of all logs matching filter with given id.","params":[{"name":"filterId","required":true,"schema":{"type":"string","description":"An identifier used to reference the filter."}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}},"name":"BROKEN"}},{"name":"eth_getLogs","summary":"Returns an array of all logs matching a given filter object.","params":[{"name":"filter","required":true,"schema":{"type":"object","description":"A filter used to monitor the blockchain for log/events","properties":{"fromBlock":{"description":"Block from which to begin filtering events","type":"string"},"toBlock":{"description":"Block from which to end filtering events","type":"string"},"address":{"oneOf":[{"type":"string","description":"Address of the contract from which to monitor events","pattern":"^0x[a-fA-F\\d]+$"},{"type":"array","description":"List of contract addresses from which to monitor events","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}}]},"topics":{"type":"array","description":"Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options","items":{"description":"Indexable 32 bytes piece of data (made from the event's function signature in solidity)","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}}}}],"result":{"schema":{"type":"array","items":{"type":"object","description":"An indexed event generated during a transaction","properties":{"address":{"description":"Sender of the transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"blockHash":{"description":"BlockHash of the block in which the transaction was mined","type":"string"},"blockNumber":{"description":"BlockNumber of the block in which the transaction was mined","type":"string"},"data":{"description":"The data/input string sent along with the transaction","type":"string"},"logIndex":{"description":"The index of the event within its transaction, null when its pending","type":"string"},"removed":{"schema":{"description":"Whether or not the log was orphaned off the main chain","type":"boolean"}},"topics":{"type":"array","items":{"topic":{"description":"32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}},"transactionHash":{"description":"The hash of the transaction in which the log occurred","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"transactionIndex":{"description":"The index of the transaction in which the log occurred","type":"string"}}}},"name":"BROKEN"}},{"name":"eth_getWork","summary":"Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').","params":[],"result":{"schema":{"type":"array","items":[{"description":"Current block header PoW hash.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"description":"The seed hash used for the DAG.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},{"description":"The boundary condition ('target'), 2^256 / difficulty.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}]},"name":"BROKEN"}},{"name":"eth_submitWork","summary":"Used for submitting a proof-of-work solution.","params":[{"name":"nonce","schema":{"description":"A number only to be used once","type":"string"}},{"name":"powHash","schema":{"description":"Current block header PoW hash.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"mixHash","schema":{"description":"The mix digest.","type":"string","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"boolean","description":"Whether or not the provided solution is valid"},"name":"BROKEN"}},{"name":"eth_submitHashrate","summary":"Returns an array of all logs matching a given filter object.","params":[{"name":"hashRate","schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"id","description":"String identifiying the client","schema":{"type":"string","description":"Hex representation of a 256 bit unit of data","pattern":"^0x[a-fA-F\\d]+$"}}],"result":{"schema":{"type":"boolean","description":"whether of not submitting went through succesfully"},"name":"BROKEN"}},{"name":"eth_getProof","summary":"Returns the account- and storage-values of the specified account including the Merkle-proof.","params":[{"description":"The address of the account or contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"name":"storageKeys","schema":{"description":"The storage keys of all the storage slots being requested","items":{"description":"A storage key is indexed from the solidity compiler by the order it is declaired. For mappings it uses the keccak of the mapping key with its position (and recursively for X-dimentional mappings)","type":"string"}}},{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"object","description":"The requested datum with their merkle proofs connecting them to the blockhash of the block specified","properties":{"address":{"description":"The address of the account or contract of the request","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"accountProof":{"type":"array","description":"The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value","items":{"type":"string","description":"An indiviual node used to prove a path down a merkle-patricia-tree"}},"balance":{"description":"The Ether balance of the account or contract of the request","type":"string"},"codeHash":{"description":"The code hash of the contract of the request (keccak(NULL) if external account)","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"nonce":{"description":"The transaction count of the account or contract of the request","type":"string"},"storageHash":{"description":"The storage hash of the contract of the request (keccak(rlp(NULL)) if external account)","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"storageProof":{"type":"array","description":"Current block header PoW hash.","items":{"type":"object","description":"Object proving a relationship of a storage value to an account's storageHash.","properties":{"key":{"description":"The key used to get the storage slot in its account tree","type":"string"},"value":{"description":"The value of the storage slot in its account tree","type":"string"},"proof":{"type":"array","description":"The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value","items":{"type":"string","description":"An indiviual node used to prove a path down a merkle-patricia-tree"}}}}}}},"name":"BROKEN"}},{"name":"eth_getCode","summary":"Returns code at a given contract address","params":[{"description":"The address of the contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"A BlockNumber of which the code existed","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of a variable length byte array"},"name":"BROKEN"}},{"name":"eth_getBalance","summary":"Returns Ether balance of a given or account or contract","params":[{"description":"The address of the acccount or contract","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"A BlockNumber at which to request the balance","name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"type":"string","description":"Hex representation of the integer"},"name":"BROKEN"}},{"name":"eth_sign","summary":"The sign method calculates an Ethereum specific signature with: sign(keccak256( '\\x19Ethereum Signed Message:\n' + len(message) + message))).","params":[{"description":"The address of the account who's signature to use.","name":"address","required":true,"schema":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},{"description":"The message to sign","schema":{"type":"string","description":"Hex representation of a variable length byte array"},"name":"BROKEN"}],"result":{"schema":{"description":"The signature data.","type":"string"},"name":"BROKEN"}},{"name":"eth_account","summary":"Returns a list of accounts owned by the client","params":[],"result":{"schema":{"description":"An array of addresses owned by the client","type":"array","items":{"type":"string","pattern":"^0x[a-fA-F\\d]+$"}},"name":"BROKEN"}},{"name":"eth_gasPrice","summary":"Returns the current price per gas in wei","params":[],"result":{"schema":{"description":"Integer of the current gas price","type":"string"},"name":"BROKEN"}},{"name":"eth_hashrate","summary":"Returns the number of hashes per second that the node is mining with.","params":[],"result":{"schema":{"description":"Integer of the number of hashes per second","type":"string"},"name":"BROKEN"}},{"name":"eth_mining","summary":"Returns true if client is actively mining new blocks.","params":[],"result":{"schema":{"description":"Whether of not the client is mining","type":"boolean"},"name":"BROKEN"}},{"name":"eth_coinbase","summary":"Returns the client coinbase address.","params":[],"result":{"schema":{"description":"The address owned by the client that is used as default for things like the mining reward","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"name":"BROKEN"}},{"name":"eth_protocolVersion","summary":"Returns the current ethereum protocol version.","params":[],"result":{"schema":{"description":"The current ethereum protocol version","type":"string"},"name":"BROKEN"}},{"name":"eth_blockTransactionCountByHash","summary":"Returns the number of transactions in a block from a block matching the given block hash.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}}],"result":{"schema":{"description":"The Number of total transactions in the given block","type":"string"},"name":"BROKEN"}},{"name":"eth_blockTransactionCountByNumber","summary":"Returns the number of transactions in a block from a block matching the given block number.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"description":"The Number of total transactions in the given block","type":"string"},"name":"BROKEN"}},{"name":"eth_getUncleCountByBlockHash","summary":"Returns the number of uncles in a block from a block matching the given block hash.","params":[{"name":"blockHash","required":true,"schema":{"type":"string","description":"The hex representation of the Keccak 256 of the RLP encoded block"}}],"result":{"schema":{"description":"The Number of total uncles in the given block","type":"string"},"name":"BROKEN"}},{"name":"eth_getUncleCountByBlockNumber","summary":"Returns the number of uncles in a block from a block matching the given block number.","params":[{"name":"blockNumber","required":true,"schema":{"oneOf":[{"type":"string","description":"The hex representation of the block's height"},{"type":"string","description":"The optional block height description","enum":["earliest","latest","pending"]}]}}],"result":{"schema":{"description":"The Number of total uncles in the given block","type":"string"},"name":"BROKEN"}},{"name":"eth_sendTransaction","summary":"Creates new message call transaction or a contract creation, if the data field contains code.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The transaction hash, or the zero hash if the transaction is not yet available.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"name":"BROKEN"}},{"name":"eth_sendRawTransaction","summary":"Creates new message call transaction or a contract creation for signed transactions.","params":[{"description":"The signed transaction data","schema":{"type":"string","description":"Hex representation of a variable length byte array"},"name":"BROKEN"}],"result":{"schema":{"description":"The transaction hash, or the zero hash if the transaction is not yet available.","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"name":"BROKEN"}},{"name":"eth_call","summary":"Executes a new message call (locally) immediately without creating a transaction on the block chain.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The return value of the executed contract","type":"string"},"name":"BROKEN"}},{"name":"eth_estimateGas","summary":"Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.","params":[{"required":true,"name":"transaction","schema":{"type":"object","properties":{"from":{"description":"Address of the sender","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"to":{"description":"address of the receiver. optional if it's a contract creation transaction","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"gas":{"type":"string","description":"The gas limit provided by the sender in Wei. default 90000"},"gasPrice":{"type":"string","description":"The gas price willing to be paid by the sender in Wei"},"value":{"description":"Value of Ether being transferred in Wei","type":"string","pattern":"^0x[a-fA-F\\d]+$"},"data":{"type":"string","description":"The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI."},"nonce":{"description":"The total number of prior transactions made by the sender.","type":"string"}}}}],"result":{"schema":{"description":"The amount of gas used","type":"string"},"name":"BROKEN"}},{"name":"eth_syncing","summary":"Returns an object with data about the sync status or false.","params":[],"result":{"schema":{"oneOf":[{"description":"An object with sync status data","type":"object","properties":{"startingBlock":{"description":"Block at which the import started (will only be reset, after the sync reached his head)","type":"string"},"currentBlock":{"description":"The current block, same as eth_blockNumber","type":"string"},"highestBlock":{"description":"The estimated highest block","type":"string"},"knownStates":{"description":"The known states","type":"string"},"pulledStates":{"description":"The pulled states","type":"string"}}},{"type":"boolean","description":"The value `false` indicating that syncing is complete"}]},"name":"BROKEN"}},{"name":"eth_getCompilers","summary":"Returns a list of available compilers in the client.","params":[],"result":{"schema":{"type":"array","description":"Array of available compilers.","items":{"description":"Name of an available compiler","type":"string"}},"name":"BROKEN"}},{"name":"eth_compileSolidity","summary":"Returns compiled solidity code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The Solidity code string (no new-lines)."}}],"result":{"schema":{"type":"object","description":"An object containing information about the code.","properties":{"code":{"description":"The compiled Byte code","type":"string"},"info":{"description":"An object contianing information about the code compilation.","type":"object","properties":{"source":{"type":"string","description":"The sorce code that was compiled"},"language":{"type":"string","description":"The language of the code that was compiled"},"languageVersion":{"type":"string","description":"The language version number"},"compilerVersion":{"type":"string","description":"The sorce code that was compiled"},"abiDefinition":{"type":"object","description":"The application binary interface definitions of the code"}}}}},"name":"BROKEN"}},{"name":"eth_compileLLL","summary":"Returns compiled LLL code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The LLL code string (no new-lines)."}}],"result":{"schema":{"description":"The compiled Byte code","type":"string"},"name":"BROKEN"}},{"name":"eth_compileSerpent","summary":"Returns compiled Serpent code.","params":[{"name":"code","required":true,"schema":{"type":"string","description":"The Serpent code string (no new-lines)."}}],"result":{"schema":{"description":"The compiled Byte code","type":"string"},"name":"BROKEN"}}];
    if (options.transport === undefined || options.transport.type === undefined) {
      throw new Error("Invalid constructor params");
    }

    this.rpc = (jayson.Client as any)[options.transport.type](options.transport);

    this.validator = new ajv();
    this.methods.forEach((method) => {
      method.params.forEach((param: any, i: number) => this.validator.addSchema(param.schema, makeIdForMethodContentDescriptors(method, param)));
    });
  }

  
  
  /**
   * Gets a block for a given hash
   */
  eth_getBlockByHash(blockHash: TBlockHash, includeTransactions: TIncludeTransactions): Promise<IBlock> {
    const params = Array.from(arguments);
    const methodName = "eth_getBlockByHash";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Gets a block for a given number
   */
  eth_getBlockByNumber(blockNumber: TBlockNumber, includeTransactions: TIncludeTransactions): Promise<IBlock> {
    const params = Array.from(arguments);
    const methodName = "eth_getBlockByNumber";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Gets a block for a given number
   */
  eth_blockNumber(): Promise<TBlockNumber> {
    const params = Array.from(arguments);
    const methodName = "eth_blockNumber";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Gets a storage value from a contract address, a position, and an optional blockNumber
   */
  eth_getStorageAt(address: TAddress, key: TKey, blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getStorageAt";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of transactions sent from an address
   */
  eth_getTransactionCount(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getTransactionCount";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the information about a transaction requested by transaction hash.
   */
  eth_getTransactionByHash(transactionHash: TTransactionHash): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getTransactionByHash";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the information about a transaction requested by the block hash and index of which it was mined.
   */
  eth_getTransactionByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getTransactionByBlockHashAndIndex";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the information about a transaction requested by the block hash and index of which it was mined.
   */
  eth_getTransactionByBlockNumberAndIndex(blockNumber: TBlockNumber, index: TIndex): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getTransactionByBlockNumberAndIndex";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the receipt information of a transaction by its hash.
   */
  eth_getTransactionReceipt(transactionHash: TTransactionHash): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getTransactionReceipt";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns information about a uncle of a block by hash and uncle index position.
   */
  eth_getUncleByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getUncleByBlockHashAndIndex";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns information about a uncle of a block by hash and uncle index position.
   */
  eth_getUncleByBlockNumberAndIndex(blockNumber: TBlockNumber, index: TIndex): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getUncleByBlockNumberAndIndex";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.
   */
  eth_newFilter(filter: IFilter): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_newFilter";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.
   */
  eth_newBlockFilter(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_newBlockFilter";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.
   */
  eth_newPendingTransactionFilter(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_newPendingTransactionFilter";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.
   */
  eth_uninstallFilter(filterId: TFilterId): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_uninstallFilter";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Polling method for a filter, which returns an array of logs which occurred since last poll.
   */
  eth_getFilterChanges(filterId: TFilterId): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getFilterChanges";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns an array of all logs matching filter with given id.
   */
  eth_getFilterLogs(filterId: TFilterId): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getFilterLogs";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns an array of all logs matching a given filter object.
   */
  eth_getLogs(filter: IFilter): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getLogs";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
   */
  eth_getWork(): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getWork";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Used for submitting a proof-of-work solution.
   */
  eth_submitWork(nonce: TNonce, powHash: TPowHash, mixHash: TMixHash): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_submitWork";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns an array of all logs matching a given filter object.
   */
  eth_submitHashrate(hashRate: THashRate, id: TId): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_submitHashrate";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the account- and storage-values of the specified account including the Merkle-proof.
   */
  eth_getProof(address: TAddress, storageKeys: TStorageKeys, blockNumber: TBlockNumber): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getProof";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns code at a given contract address
   */
  eth_getCode(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getCode";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns Ether balance of a given or account or contract
   */
  eth_getBalance(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getBalance";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * The sign method calculates an Ethereum specific signature with: sign(keccak256( '\x19Ethereum Signed Message:
' + len(message) + message))).
   */
  eth_sign(address: TAddress, BROKEN: TBROKEN): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_sign";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns a list of accounts owned by the client
   */
  eth_account(): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_account";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the current price per gas in wei
   */
  eth_gasPrice(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_gasPrice";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of hashes per second that the node is mining with.
   */
  eth_hashrate(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_hashrate";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns true if client is actively mining new blocks.
   */
  eth_mining(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_mining";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the client coinbase address.
   */
  eth_coinbase(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_coinbase";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the current ethereum protocol version.
   */
  eth_protocolVersion(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_protocolVersion";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of transactions in a block from a block matching the given block hash.
   */
  eth_blockTransactionCountByHash(blockHash: TBlockHash): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_blockTransactionCountByHash";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of transactions in a block from a block matching the given block number.
   */
  eth_blockTransactionCountByNumber(blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_blockTransactionCountByNumber";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of uncles in a block from a block matching the given block hash.
   */
  eth_getUncleCountByBlockHash(blockHash: TBlockHash): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getUncleCountByBlockHash";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns the number of uncles in a block from a block matching the given block number.
   */
  eth_getUncleCountByBlockNumber(blockNumber: TBlockNumber): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getUncleCountByBlockNumber";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Creates new message call transaction or a contract creation, if the data field contains code.
   */
  eth_sendTransaction(transaction: ITransaction): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_sendTransaction";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Creates new message call transaction or a contract creation for signed transactions.
   */
  eth_sendRawTransaction(BROKEN: TBROKEN): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_sendRawTransaction";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Executes a new message call (locally) immediately without creating a transaction on the block chain.
   */
  eth_call(transaction: ITransaction): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_call";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
   */
  eth_estimateGas(transaction: ITransaction): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_estimateGas";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns an object with data about the sync status or false.
   */
  eth_syncing(): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_syncing";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns a list of available compilers in the client.
   */
  eth_getCompilers(): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_getCompilers";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns compiled solidity code.
   */
  eth_compileSolidity(code: TCode): Promise<IBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_compileSolidity";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns compiled LLL code.
   */
  eth_compileLLL(code: TCode): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_compileLLL";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
  
  /**
   * Returns compiled Serpent code.
   */
  eth_compileSerpent(code: TCode): Promise<TBROKEN> {
    const params = Array.from(arguments);
    const methodName = "eth_compileSerpent";
    const methodObject = _.find(this.methods, ({name}: any) => name === methodName);

    const errors = _.chain((methodObject as any).params)
        .map((param: any, index: number) => {
        const isValid = this.validator.validate(makeIdForMethodContentDescriptors(methodObject, param), params[index]);
        const message = [
          "Expected param in position ",
          index,
          " to match the json schema: ",
          JSON.stringify(param.schema, undefined, '	'),
          ". The function received instead ",
          params[index],
          "."
        ].join("");

        if (!isValid) {
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();

    if (errors.length > 0) {
      return Promise.reject(errors);
    }

    
    const rpcParams = params;
    
    const result : any = this.rpc.request(methodName, rpcParams);
    return result.then((r: any) => r.result);
  }

  
}
