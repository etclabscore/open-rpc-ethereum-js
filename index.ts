
import * as jayson from "jayson/promise";
import ajv from "ajv";
import _ from "lodash";
import { makeIdForMethodContentDescriptors } from "@open-rpc/schema-utils-js";

class ParameterValidationError extends Error {
  constructor(public message: string, public errors: ajv.ErrorObject[] | undefined | null) {
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
  transactions?: Array<
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
    | string>;
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
export type TDataWord = string;
/**
 * A number only to be used once
 */
export type TNonce = string;
/**
 * Keccak 256 Hash of the RLP encoding of a transaction
 */
export type TTransactionHash = string;
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
 * Hex representation of the integer
 */
export type TIndex = string;
/**
 * The receipt of a transaction
 */
export interface IReceipt {
  /**
   * BlockHash of the block in which the transaction was mined
   */
  blockHash: string;
  /**
   * BlockNumber of the block in which the transaction was mined
   */
  blockNumber: string;
  /**
   * The contract address created, if the transaction was a contract creation, otherwise null
   */
  contractAddress: string;
  /**
   * The gas units used by the transaction
   */
  cumulativeGasUsed: string;
  /**
   * The sender of the transaction
   */
  from: string;
  /**
   * The total gas used by the transaction
   */
  gasUsed: string;
  /**
   * An array of all the logs triggered during the transaction
   */
  logs: Array<{
    /**
     * Sender of the transaction
     */
    address?: string;
    /**
     * BlockHash of the block in which the transaction was mined
     */
    blockHash?: string;
    /**
     * BlockNumber of the block in which the transaction was mined
     */
    blockNumber?: string;
    /**
     * The data/input string sent along with the transaction
     */
    data?: string;
    /**
     * The index of the event within its transaction, null when its pending
     */
    logIndex?: string;
    removed?: {
      [k: string]: any;
    };
    topics?: Array<{
      [k: string]: any;
    }>;
    /**
     * The hash of the transaction in which the log occurred
     */
    transactionHash?: string;
    /**
     * The index of the transaction in which the log occurred
     */
    transactionIndex?: string;
    [k: string]: any;
  }>;
  /**
   * A 2048 bit bloom filter from the logs of the transaction. Each log sets 3 bits though taking the low-order 11 bits of each of the first three pairs of bytes in a Keccak 256 hash of the log's byte series
   */
  logsBloom: string;
  /**
   * Destination address of the transaction
   */
  to: string;
  /**
   * Keccak 256 of the transaction
   */
  transactionHash: string;
  /**
   * An array of all the logs triggered during the transaction
   */
  transactionIndex: string;
  /**
   * The intermediate stateRoot directly after transaction execution.
   */
  postTransactionState?: string;
  /**
   * Whether or not the transaction threw an error.
   */
  status?: boolean;
  [k: string]: any;
}
export interface IUncle {
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
   * Array of uncle hashes
   */
  uncles?: string[];
  [k: string]: any;
}
/**
 * The hex representation of the block's height
 */
export type TUncleBlockNumber = string;
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
 * The filter ID for use in `eth_getFilterChanges`
 */
export type TFilterId = string;
/**
 * Whether of not the filter was successfully uninstalled
 */
export type TFilterUninstalledSuccess = boolean;
export type I = Array<{
  /**
   * Sender of the transaction
   */
  address?: string;
  /**
   * BlockHash of the block in which the transaction was mined
   */
  blockHash?: string;
  /**
   * BlockNumber of the block in which the transaction was mined
   */
  blockNumber?: string;
  /**
   * The data/input string sent along with the transaction
   */
  data?: string;
  /**
   * The index of the event within its transaction, null when its pending
   */
  logIndex?: string;
  removed?: {
    [k: string]: any;
  };
  topics?: Array<{
    [k: string]: any;
  }>;
  /**
   * The hash of the transaction in which the log occurred
   */
  transactionHash?: string;
  /**
   * The index of the transaction in which the log occurred
   */
  transactionIndex?: string;
  [k: string]: any;
}>;
export type ILogs = Array<{
  /**
   * Sender of the transaction
   */
  address?: string;
  /**
   * BlockHash of the block in which the transaction was mined
   */
  blockHash?: string;
  /**
   * BlockNumber of the block in which the transaction was mined
   */
  blockNumber?: string;
  /**
   * The data/input string sent along with the transaction
   */
  data?: string;
  /**
   * The index of the event within its transaction, null when its pending
   */
  logIndex?: string;
  removed?: {
    [k: string]: any;
  };
  topics?: Array<{
    [k: string]: any;
  }>;
  /**
   * The hash of the transaction in which the log occurred
   */
  transactionHash?: string;
  /**
   * The index of the transaction in which the log occurred
   */
  transactionIndex?: string;
  [k: string]: any;
}>;
export type IWork = [string, string, string];
/**
 * Current block header PoW hash.
 */
export type TPowHash = string;
/**
 * The mix digest.
 */
export type TMixHash = string;
/**
 * Whether or not the provided solution is valid
 */
export type TSolutionValid = boolean;
/**
 * Hex representation of a 256 bit unit of data
 */
export type THashRate = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export type TId = string;
/**
 * whether of not submitting went through succesfully
 */
export type TSubmitHashRateSuccess = boolean;
/**
 * The storage keys of all the storage slots being requested
 */
export type TStorageKeys = string[];
/**
 * The merkle proofs of the specified account connecting them to the blockhash of the block specified
 */
export interface IAccount {
  /**
   * The address of the account or contract of the request
   */
  address?: string;
  /**
   * The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value
   */
  accountProof?: string[];
  /**
   * The Ether balance of the account or contract of the request
   */
  balance?: string;
  /**
   * The code hash of the contract of the request (keccak(NULL) if external account)
   */
  codeHash?: string;
  /**
   * The transaction count of the account or contract of the request
   */
  nonce?: string;
  /**
   * The storage hash of the contract of the request (keccak(rlp(NULL)) if external account)
   */
  storageHash?: string;
  /**
   * Current block header PoW hash.
   */
  storageProof?: Array<{
    /**
     * The key used to get the storage slot in its account tree
     */
    key?: string;
    /**
     * The value of the storage slot in its account tree
     */
    value?: string;
    /**
     * The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value
     */
    proof?: string[];
    [k: string]: any;
  }>;
  [k: string]: any;
}
/**
 * Hex representation of a variable length byte array
 */
export type TBytes = string;
/**
 * Hex representation of the integer
 */
export type TInteger = string;
/**
 * Hex representation of a variable length byte array
 */
export type TMessage = string;
/**
 * The signature data.
 */
export type TSignatureData = string;
/**
 * An array of addresses owned by the client
 */
export type IAddresses = string[];
/**
 * Integer of the current gas price
 */
export type TGasPrice = string;
/**
 * Integer of the number of hashes per second
 */
export type THashesPerSecond = string;
/**
 * Whether of not the client is mining
 */
export type TMining = boolean;
/**
 * The current ethereum protocol version
 */
export type TProtocolVersion = string;
/**
 * The Number of total transactions in the given block
 */
export type TBlockTransactionCountByHash = string;
/**
 * The Number of total transactions in the given block
 */
export type TBlocktransactionCountByNumber = string;
/**
 * The Number of total uncles in the given block
 */
export type TUncleCount = string;
/**
 * Hex representation of a variable length byte array
 */
export type TSignedTransactionData = string;
/**
 * The return value of the executed contract
 */
export type TReturnValue = string;
/**
 * The amount of gas used
 */
export type TGasUsed = string;
export type TSyncing =
  | {
      /**
       * Block at which the import started (will only be reset, after the sync reached his head)
       */
      startingBlock?: string;
      /**
       * The current block, same as eth_blockNumber
       */
      currentBlock?: string;
      /**
       * The estimated highest block
       */
      highestBlock?: string;
      /**
       * The known states
       */
      knownStates?: string;
      /**
       * The pulled states
       */
      pulledStates?: string;
      [k: string]: any;
    }
  | boolean;
/**
 * Array of available compilers.
 */
export type ICompilers = string[];
/**
 * The Solidity code string (no new-lines).
 */
export type TCode = string;
/**
 * An object containing information about the code.
 */
export interface ICodeResponse {
  /**
   * The compiled Byte code
   */
  code?: string;
  /**
   * An object contianing information about the code compilation.
   */
  info?: {
    /**
     * The sorce code that was compiled
     */
    source?: string;
    /**
     * The language of the code that was compiled
     */
    language?: string;
    /**
     * The language version number
     */
    languageVersion?: string;
    /**
     * The sorce code that was compiled
     */
    compilerVersion?: string;
    /**
     * The application binary interface definitions of the code
     */
    abiDefinition?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
/**
 * The compiled Byte code
 */
export type TCopmiledCode = string;
/**
 * The compiled Byte code
 */
export type TCompiledCode = string;

export default class boob {
  public rpc: jayson.Client;
  public methods: any[];
  private validator: ajv.Ajv;

  constructor(options: any) {
    this.methods = [
  {
    "name": "eth_getBlockByHash",
    "summary": "Gets a block for a given hash",
    "params": [
      {
        "name": "blockHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the Keccak 256 of the RLP encoded block",
        },
      },
      {
        "name": "includeTransactions",
        "description": "If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.",
        "required": true,
        "schema": {
          "type": "boolean",
        },
      },
    ],
    "result": {
      "name": "block",
      "description": "A block",
      "schema": {
        "type": "object",
        "properties": {
          "number": {
            "description": "The block number or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "hash": {
            "description": "The block hash or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of a Keccak 256 hash",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "parentHash": {
            "description": "Hash of the parent block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "nonce": {
            "description": "Randomly selected number to satisfy the proof-of-work or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "sha3Uncles": {
            "description": "Keccak hash of the uncles data in the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "logsBloom": {
            "type": "string",
            "description": "The bloom filter for the logs of the block or null when its the pending block",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionsRoot": {
            "description": "The root of the transactions trie of the block.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "stateRoot": {
            "description": "The root of the final state trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "receiptsRoot": {
            "description": "The root of the receipts trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "miner": {
            "description": "The address of the beneficiary to whom the mining rewards were given or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "difficulty": {
            "type": "string",
            "description": "Integer of the difficulty for this block",
          },
          "totalDifficulty": {
            "description": "Integer of the total difficulty of the chain until this block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "extraData": {
            "type": "string",
            "description": "The 'extra data' field of this block",
          },
          "size": {
            "type": "string",
            "description": "Integer the size of this block in bytes",
          },
          "gasLimit": {
            "type": "string",
            "description": "The maximum gas allowed in this block",
          },
          "gasUsed": {
            "type": "string",
            "description": "The total used gas by all transactions in this block",
          },
          "timestamp": {
            "type": "string",
            "description": "The unix timestamp for when the block was collated",
          },
          "transactions": {
            "description": "Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter",
            "type": "array",
            "items": {
              "oneOf": [
                {
                  "type": "object",
                  "properties": {
                    "blockHash": {
                      "description": "Hash of the block where this transaction was in. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of a Keccak 256 hash",
                          "pattern": "^0x[a-fA-F\\d]+$",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "blockNumber": {
                      "description": "Block number where this transaction was in. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of the integer",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "from": {
                      "description": "Address of the sender",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "gas": {
                      "type": "string",
                      "description": "The gas limit provided by the sender in Wei",
                    },
                    "gasPrice": {
                      "type": "string",
                      "description": "The gas price willing to be paid by the sender in Wei",
                    },
                    "hash": {
                      "type": "string",
                      "description": "Keccak 256 Hash of the RLP encoding of a transaction",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "input": {
                      "type": "string",
                      "description": "The data field sent with the transaction",
                    },
                    "nonce": {
                      "description": "The total number of prior transactions made by the sender",
                      "type": "string",
                    },
                    "to": {
                      "description": "address of the receiver. null when its a contract creation transaction",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "transactionIndex": {
                      "description": "Integer of the transaction's index position in the block. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of the integer",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "value": {
                      "description": "Value of Ether being transferred in Wei",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "v": {
                      "type": "string",
                      "description": "ECDSA recovery id",
                    },
                    "r": {
                      "type": "string",
                      "description": "ECDSA signature r",
                    },
                    "s": {
                      "type": "string",
                      "description": "ECDSA signature s",
                    },
                  },
                },
                {
                  "type": "string",
                  "description": "Keccak 256 Hash of the RLP encoding of a transaction",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
              ],
            },
          },
          "uncles": {
            "description": "Array of uncle hashes",
            "type": "array",
            "items": {
              "description": "Block hash of the RLP encoding of an uncle block",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getBlockByNumber",
    "summary": "Gets a block for a given number",
    "params": [
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
      {
        "name": "includeTransactions",
        "description": "If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.",
        "required": true,
        "schema": {
          "type": "boolean",
        },
      },
    ],
    "result": {
      "name": "block",
      "description": "A block",
      "schema": {
        "type": "object",
        "properties": {
          "number": {
            "description": "The block number or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "hash": {
            "description": "The block hash or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of a Keccak 256 hash",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "parentHash": {
            "description": "Hash of the parent block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "nonce": {
            "description": "Randomly selected number to satisfy the proof-of-work or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "sha3Uncles": {
            "description": "Keccak hash of the uncles data in the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "logsBloom": {
            "type": "string",
            "description": "The bloom filter for the logs of the block or null when its the pending block",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionsRoot": {
            "description": "The root of the transactions trie of the block.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "stateRoot": {
            "description": "The root of the final state trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "receiptsRoot": {
            "description": "The root of the receipts trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "miner": {
            "description": "The address of the beneficiary to whom the mining rewards were given or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "difficulty": {
            "type": "string",
            "description": "Integer of the difficulty for this block",
          },
          "totalDifficulty": {
            "description": "Integer of the total difficulty of the chain until this block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "extraData": {
            "type": "string",
            "description": "The 'extra data' field of this block",
          },
          "size": {
            "type": "string",
            "description": "Integer the size of this block in bytes",
          },
          "gasLimit": {
            "type": "string",
            "description": "The maximum gas allowed in this block",
          },
          "gasUsed": {
            "type": "string",
            "description": "The total used gas by all transactions in this block",
          },
          "timestamp": {
            "type": "string",
            "description": "The unix timestamp for when the block was collated",
          },
          "transactions": {
            "description": "Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter",
            "type": "array",
            "items": {
              "oneOf": [
                {
                  "type": "object",
                  "properties": {
                    "blockHash": {
                      "description": "Hash of the block where this transaction was in. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of a Keccak 256 hash",
                          "pattern": "^0x[a-fA-F\\d]+$",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "blockNumber": {
                      "description": "Block number where this transaction was in. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of the integer",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "from": {
                      "description": "Address of the sender",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "gas": {
                      "type": "string",
                      "description": "The gas limit provided by the sender in Wei",
                    },
                    "gasPrice": {
                      "type": "string",
                      "description": "The gas price willing to be paid by the sender in Wei",
                    },
                    "hash": {
                      "type": "string",
                      "description": "Keccak 256 Hash of the RLP encoding of a transaction",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "input": {
                      "type": "string",
                      "description": "The data field sent with the transaction",
                    },
                    "nonce": {
                      "description": "The total number of prior transactions made by the sender",
                      "type": "string",
                    },
                    "to": {
                      "description": "address of the receiver. null when its a contract creation transaction",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "transactionIndex": {
                      "description": "Integer of the transaction's index position in the block. null when its pending",
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Hex representation of the integer",
                        },
                        {
                          "type": "null",
                          "description": "Null",
                        },
                      ],
                    },
                    "value": {
                      "description": "Value of Ether being transferred in Wei",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                    "v": {
                      "type": "string",
                      "description": "ECDSA recovery id",
                    },
                    "r": {
                      "type": "string",
                      "description": "ECDSA signature r",
                    },
                    "s": {
                      "type": "string",
                      "description": "ECDSA signature s",
                    },
                  },
                },
                {
                  "type": "string",
                  "description": "Keccak 256 Hash of the RLP encoding of a transaction",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
              ],
            },
          },
          "uncles": {
            "description": "Array of uncle hashes",
            "type": "array",
            "items": {
              "description": "Block hash of the RLP encoding of an uncle block",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_blockNumber",
    "summary": "Gets a block for a given number",
    "params": [],
    "result": {
      "name": "blockNumber",
      "schema": {
        "type": "string",
        "description": "Hex string representation of the current block number the client is on",
      },
    },
  },
  {
    "name": "eth_getStorageAt",
    "summary": "Gets a storage value from a contract address, a position, and an optional blockNumber",
    "params": [
      {
        "name": "address",
        "required": true,
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "key",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Hex representation of the storage slot where the variable exists",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
    ],
    "result": {
      "name": "dataWord",
      "schema": {
        "type": "string",
        "description": "Hex representation of a 256 bit unit of data",
        "pattern": "^0x[a-fA-F\\d]+$",
      },
    },
  },
  {
    "name": "eth_getTransactionCount",
    "summary": "Returns the number of transactions sent from an address",
    "params": [
      {
        "name": "address",
        "required": true,
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
    ],
    "result": {
      "name": "nonce",
      "schema": {
        "description": "A number only to be used once",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_getTransactionByHash",
    "summary": "Returns the information about a transaction requested by transaction hash.",
    "params": [
      {
        "name": "transactionHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Keccak 256 Hash of the RLP encoding of a transaction",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
    ],
    "result": {
      "required": true,
      "name": "transaction",
      "schema": {
        "type": "object",
        "properties": {
          "from": {
            "description": "Address of the sender",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "to": {
            "description": "address of the receiver. optional if it's a contract creation transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "gas": {
            "type": "string",
            "description": "The gas limit provided by the sender in Wei. default 90000",
          },
          "gasPrice": {
            "type": "string",
            "description": "The gas price willing to be paid by the sender in Wei",
          },
          "value": {
            "description": "Value of Ether being transferred in Wei",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "data": {
            "type": "string",
            "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
          },
          "nonce": {
            "description": "The total number of prior transactions made by the sender.",
            "type": "string",
          },
        },
      },
    },
  },
  {
    "name": "eth_getTransactionByBlockHashAndIndex",
    "summary": "Returns the information about a transaction requested by the block hash and index of which it was mined.",
    "params": [
      {
        "name": "blockHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the Keccak 256 of the RLP encoded block",
        },
      },
      {
        "name": "index",
        "description": "The ordering in which a transaction is mined within its block.",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Hex representation of the integer",
        },
      },
    ],
    "result": {
      "required": true,
      "name": "transaction",
      "schema": {
        "type": "object",
        "properties": {
          "from": {
            "description": "Address of the sender",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "to": {
            "description": "address of the receiver. optional if it's a contract creation transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "gas": {
            "type": "string",
            "description": "The gas limit provided by the sender in Wei. default 90000",
          },
          "gasPrice": {
            "type": "string",
            "description": "The gas price willing to be paid by the sender in Wei",
          },
          "value": {
            "description": "Value of Ether being transferred in Wei",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "data": {
            "type": "string",
            "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
          },
          "nonce": {
            "description": "The total number of prior transactions made by the sender.",
            "type": "string",
          },
        },
      },
    },
  },
  {
    "name": "eth_getTransactionByBlockNumberAndIndex",
    "summary": "Returns the information about a transaction requested by the block hash and index of which it was mined.",
    "params": [
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
      {
        "name": "index",
        "description": "The ordering in which a transaction is mined within its block.",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Hex representation of the integer",
        },
      },
    ],
    "result": {
      "required": true,
      "name": "transaction",
      "schema": {
        "type": "object",
        "properties": {
          "from": {
            "description": "Address of the sender",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "to": {
            "description": "address of the receiver. optional if it's a contract creation transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "gas": {
            "type": "string",
            "description": "The gas limit provided by the sender in Wei. default 90000",
          },
          "gasPrice": {
            "type": "string",
            "description": "The gas price willing to be paid by the sender in Wei",
          },
          "value": {
            "description": "Value of Ether being transferred in Wei",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "data": {
            "type": "string",
            "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
          },
          "nonce": {
            "description": "The total number of prior transactions made by the sender.",
            "type": "string",
          },
        },
      },
    },
  },
  {
    "name": "eth_getTransactionReceipt",
    "summary": "Returns the receipt information of a transaction by its hash.",
    "params": [
      {
        "name": "transactionHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Keccak 256 Hash of the RLP encoding of a transaction",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
    ],
    "result": {
      "name": "receipt",
      "schema": {
        "type": "object",
        "description": "The receipt of a transaction",
        "required": [
          "blockHash",
          "blockNumber",
          "contractAddress",
          "cumulativeGasUsed",
          "from",
          "gasUsed",
          "logs",
          "logsBloom",
          "to",
          "transactionHash",
          "transactionIndex",
        ],
        "properties": {
          "blockHash": {
            "description": "BlockHash of the block in which the transaction was mined",
            "type": "string",
          },
          "blockNumber": {
            "description": "BlockNumber of the block in which the transaction was mined",
            "type": "string",
          },
          "contractAddress": {
            "description": "The contract address created, if the transaction was a contract creation, otherwise null",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "cumulativeGasUsed": {
            "description": "The gas units used by the transaction",
            "type": "string",
          },
          "from": {
            "description": "The sender of the transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "gasUsed": {
            "description": "The total gas used by the transaction",
            "type": "string",
          },
          "logs": {
            "type": "array",
            "description": "An array of all the logs triggered during the transaction",
            "items": {
              "type": "object",
              "description": "An indexed event generated during a transaction",
              "properties": {
                "address": {
                  "description": "Sender of the transaction",
                  "type": "string",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
                "blockHash": {
                  "description": "BlockHash of the block in which the transaction was mined",
                  "type": "string",
                },
                "blockNumber": {
                  "description": "BlockNumber of the block in which the transaction was mined",
                  "type": "string",
                },
                "data": {
                  "description": "The data/input string sent along with the transaction",
                  "type": "string",
                },
                "logIndex": {
                  "description": "The index of the event within its transaction, null when its pending",
                  "type": "string",
                },
                "removed": {
                  "schema": {
                    "description": "Whether or not the log was orphaned off the main chain",
                    "type": "boolean",
                  },
                },
                "topics": {
                  "type": "array",
                  "items": {
                    "topic": {
                      "description": "32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))",
                      "type": "string",
                      "pattern": "^0x[a-fA-F\\d]+$",
                    },
                  },
                },
                "transactionHash": {
                  "description": "The hash of the transaction in which the log occurred",
                  "type": "string",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
                "transactionIndex": {
                  "description": "The index of the transaction in which the log occurred",
                  "type": "string",
                },
              },
            },
          },
          "logsBloom": {
            "type": "string",
            "description": "A 2048 bit bloom filter from the logs of the transaction. Each log sets 3 bits though taking the low-order 11 bits of each of the first three pairs of bytes in a Keccak 256 hash of the log's byte series",
          },
          "to": {
            "description": "Destination address of the transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionHash": {
            "description": "Keccak 256 of the transaction",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionIndex": {
            "description": "An array of all the logs triggered during the transaction",
            "type": "string",
          },
          "postTransactionState": {
            "description": "The intermediate stateRoot directly after transaction execution.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "status": {
            "description": "Whether or not the transaction threw an error.",
            "type": "boolean",
          },
        },
      },
    },
  },
  {
    "name": "eth_getUncleByBlockHashAndIndex",
    "summary": "Returns information about a uncle of a block by hash and uncle index position.",
    "params": [
      {
        "name": "blockHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the Keccak 256 of the RLP encoded block",
        },
      },
      {
        "name": "index",
        "description": "The ordering in which a uncle is included within its block.",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Hex representation of the integer",
        },
      },
    ],
    "result": {
      "name": "uncle",
      "schema": {
        "type": "object",
        "properties": {
          "number": {
            "description": "The block number or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "hash": {
            "description": "The block hash or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of a Keccak 256 hash",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "parentHash": {
            "description": "Hash of the parent block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "nonce": {
            "description": "Randomly selected number to satisfy the proof-of-work or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "sha3Uncles": {
            "description": "Keccak hash of the uncles data in the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "logsBloom": {
            "type": "string",
            "description": "The bloom filter for the logs of the block or null when its the pending block",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionsRoot": {
            "description": "The root of the transactions trie of the block.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "stateRoot": {
            "description": "The root of the final state trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "receiptsRoot": {
            "description": "The root of the receipts trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "miner": {
            "description": "The address of the beneficiary to whom the mining rewards were given or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "difficulty": {
            "type": "string",
            "description": "Integer of the difficulty for this block",
          },
          "totalDifficulty": {
            "description": "Integer of the total difficulty of the chain until this block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "extraData": {
            "type": "string",
            "description": "The 'extra data' field of this block",
          },
          "size": {
            "type": "string",
            "description": "Integer the size of this block in bytes",
          },
          "gasLimit": {
            "type": "string",
            "description": "The maximum gas allowed in this block",
          },
          "gasUsed": {
            "type": "string",
            "description": "The total used gas by all transactions in this block",
          },
          "timestamp": {
            "type": "string",
            "description": "The unix timestamp for when the block was collated",
          },
          "uncles": {
            "description": "Array of uncle hashes",
            "type": "array",
            "items": {
              "description": "Block hash of the RLP encoding of an uncle block",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getUncleByBlockNumberAndIndex",
    "summary": "Returns information about a uncle of a block by hash and uncle index position.",
    "params": [
      {
        "name": "uncleBlockNumber",
        "description": "The block in which the uncle was included",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the block's height",
        },
      },
      {
        "name": "index",
        "description": "The ordering in which a uncle is included within its block.",
        "required": true,
        "schema": {
          "type": "string",
          "description": "Hex representation of the integer",
        },
      },
    ],
    "result": {
      "name": "uncle",
      "schema": {
        "type": "object",
        "properties": {
          "number": {
            "description": "The block number or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "hash": {
            "description": "The block hash or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of a Keccak 256 hash",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "parentHash": {
            "description": "Hash of the parent block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "nonce": {
            "description": "Randomly selected number to satisfy the proof-of-work or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "sha3Uncles": {
            "description": "Keccak hash of the uncles data in the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "logsBloom": {
            "type": "string",
            "description": "The bloom filter for the logs of the block or null when its the pending block",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "transactionsRoot": {
            "description": "The root of the transactions trie of the block.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "stateRoot": {
            "description": "The root of the final state trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "receiptsRoot": {
            "description": "The root of the receipts trie of the block",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "miner": {
            "description": "The address of the beneficiary to whom the mining rewards were given or null when its the pending block",
            "oneOf": [
              {
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "difficulty": {
            "type": "string",
            "description": "Integer of the difficulty for this block",
          },
          "totalDifficulty": {
            "description": "Integer of the total difficulty of the chain until this block",
            "oneOf": [
              {
                "type": "string",
                "description": "Hex representation of the integer",
              },
              {
                "type": "null",
                "description": "Null",
              },
            ],
          },
          "extraData": {
            "type": "string",
            "description": "The 'extra data' field of this block",
          },
          "size": {
            "type": "string",
            "description": "Integer the size of this block in bytes",
          },
          "gasLimit": {
            "type": "string",
            "description": "The maximum gas allowed in this block",
          },
          "gasUsed": {
            "type": "string",
            "description": "The total used gas by all transactions in this block",
          },
          "timestamp": {
            "type": "string",
            "description": "The unix timestamp for when the block was collated",
          },
          "uncles": {
            "description": "Array of uncle hashes",
            "type": "array",
            "items": {
              "description": "Block hash of the RLP encoding of an uncle block",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_newFilter",
    "summary": "Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.",
    "params": [
      {
        "name": "filter",
        "required": true,
        "schema": {
          "type": "object",
          "description": "A filter used to monitor the blockchain for log/events",
          "properties": {
            "fromBlock": {
              "description": "Block from which to begin filtering events",
              "type": "string",
            },
            "toBlock": {
              "description": "Block from which to end filtering events",
              "type": "string",
            },
            "address": {
              "oneOf": [
                {
                  "type": "string",
                  "description": "Address of the contract from which to monitor events",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
                {
                  "type": "array",
                  "description": "List of contract addresses from which to monitor events",
                  "items": {
                    "type": "string",
                    "pattern": "^0x[a-fA-F\\d]+$",
                  },
                },
              ],
            },
            "topics": {
              "type": "array",
              "description": "Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options",
              "items": {
                "description": "Indexable 32 bytes piece of data (made from the event's function signature in solidity)",
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
            },
          },
        },
      },
    ],
    "result": {
      "name": "filterId",
      "schema": {
        "description": "The filter ID for use in `eth_getFilterChanges`",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_newBlockFilter",
    "summary": "Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.",
    "params": [],
    "result": {
      "name": "filterId",
      "schema": {
        "description": "The filter ID for use in `eth_getFilterChanges`",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_newPendingTransactionFilter",
    "summary": "Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.",
    "params": [],
    "result": {
      "name": "filterId",
      "schema": {
        "description": "The filter ID for use in `eth_getFilterChanges`",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_uninstallFilter",
    "summary": "Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.",
    "params": [
      {
        "name": "filterId",
        "required": true,
        "schema": {
          "type": "string",
          "description": "An identifier used to reference the filter.",
        },
      },
    ],
    "result": {
      "name": "filterUninstalledSuccess",
      "schema": {
        "type": "boolean",
        "description": "Whether of not the filter was successfully uninstalled",
      },
    },
  },
  {
    "name": "eth_getFilterChanges",
    "summary": "Polling method for a filter, which returns an array of logs which occurred since last poll.",
    "params": [
      {
        "name": "filterId",
        "required": true,
        "schema": {
          "type": "string",
          "description": "An identifier used to reference the filter.",
        },
      },
    ],
    "result": {
      "name": "",
      "schema": {
        "type": "array",
        "items": {
          "type": "object",
          "description": "An indexed event generated during a transaction",
          "properties": {
            "address": {
              "description": "Sender of the transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "blockHash": {
              "description": "BlockHash of the block in which the transaction was mined",
              "type": "string",
            },
            "blockNumber": {
              "description": "BlockNumber of the block in which the transaction was mined",
              "type": "string",
            },
            "data": {
              "description": "The data/input string sent along with the transaction",
              "type": "string",
            },
            "logIndex": {
              "description": "The index of the event within its transaction, null when its pending",
              "type": "string",
            },
            "removed": {
              "schema": {
                "description": "Whether or not the log was orphaned off the main chain",
                "type": "boolean",
              },
            },
            "topics": {
              "type": "array",
              "items": {
                "topic": {
                  "description": "32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))",
                  "type": "string",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
              },
            },
            "transactionHash": {
              "description": "The hash of the transaction in which the log occurred",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "transactionIndex": {
              "description": "The index of the transaction in which the log occurred",
              "type": "string",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getFilterLogs",
    "summary": "Returns an array of all logs matching filter with given id.",
    "params": [
      {
        "name": "filterId",
        "required": true,
        "schema": {
          "type": "string",
          "description": "An identifier used to reference the filter.",
        },
      },
    ],
    "result": {
      "name": "logs",
      "description": "An array of all logs matching filter with given id.",
      "schema": {
        "type": "array",
        "items": {
          "type": "object",
          "description": "An indexed event generated during a transaction",
          "properties": {
            "address": {
              "description": "Sender of the transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "blockHash": {
              "description": "BlockHash of the block in which the transaction was mined",
              "type": "string",
            },
            "blockNumber": {
              "description": "BlockNumber of the block in which the transaction was mined",
              "type": "string",
            },
            "data": {
              "description": "The data/input string sent along with the transaction",
              "type": "string",
            },
            "logIndex": {
              "description": "The index of the event within its transaction, null when its pending",
              "type": "string",
            },
            "removed": {
              "schema": {
                "description": "Whether or not the log was orphaned off the main chain",
                "type": "boolean",
              },
            },
            "topics": {
              "type": "array",
              "items": {
                "topic": {
                  "description": "32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))",
                  "type": "string",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
              },
            },
            "transactionHash": {
              "description": "The hash of the transaction in which the log occurred",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "transactionIndex": {
              "description": "The index of the transaction in which the log occurred",
              "type": "string",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getLogs",
    "summary": "Returns an array of all logs matching a given filter object.",
    "params": [
      {
        "name": "filter",
        "required": true,
        "schema": {
          "type": "object",
          "description": "A filter used to monitor the blockchain for log/events",
          "properties": {
            "fromBlock": {
              "description": "Block from which to begin filtering events",
              "type": "string",
            },
            "toBlock": {
              "description": "Block from which to end filtering events",
              "type": "string",
            },
            "address": {
              "oneOf": [
                {
                  "type": "string",
                  "description": "Address of the contract from which to monitor events",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
                {
                  "type": "array",
                  "description": "List of contract addresses from which to monitor events",
                  "items": {
                    "type": "string",
                    "pattern": "^0x[a-fA-F\\d]+$",
                  },
                },
              ],
            },
            "topics": {
              "type": "array",
              "description": "Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options",
              "items": {
                "description": "Indexable 32 bytes piece of data (made from the event's function signature in solidity)",
                "type": "string",
                "pattern": "^0x[a-fA-F\\d]+$",
              },
            },
          },
        },
      },
    ],
    "result": {
      "name": "logs",
      "description": "An array of all logs matching filter with given id.",
      "schema": {
        "type": "array",
        "items": {
          "type": "object",
          "description": "An indexed event generated during a transaction",
          "properties": {
            "address": {
              "description": "Sender of the transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "blockHash": {
              "description": "BlockHash of the block in which the transaction was mined",
              "type": "string",
            },
            "blockNumber": {
              "description": "BlockNumber of the block in which the transaction was mined",
              "type": "string",
            },
            "data": {
              "description": "The data/input string sent along with the transaction",
              "type": "string",
            },
            "logIndex": {
              "description": "The index of the event within its transaction, null when its pending",
              "type": "string",
            },
            "removed": {
              "schema": {
                "description": "Whether or not the log was orphaned off the main chain",
                "type": "boolean",
              },
            },
            "topics": {
              "type": "array",
              "items": {
                "topic": {
                  "description": "32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256))",
                  "type": "string",
                  "pattern": "^0x[a-fA-F\\d]+$",
                },
              },
            },
            "transactionHash": {
              "description": "The hash of the transaction in which the log occurred",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "transactionIndex": {
              "description": "The index of the transaction in which the log occurred",
              "type": "string",
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getWork",
    "summary": "Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').",
    "params": [],
    "result": {
      "name": "work",
      "schema": {
        "type": "array",
        "items": [
          {
            "description": "Current block header PoW hash.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          {
            "description": "The seed hash used for the DAG.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          {
            "description": "The boundary condition ('target'), 2^256 / difficulty.",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
        ],
      },
    },
  },
  {
    "name": "eth_submitWork",
    "summary": "Used for submitting a proof-of-work solution.",
    "params": [
      {
        "name": "nonce",
        "schema": {
          "description": "A number only to be used once",
          "type": "string",
        },
      },
      {
        "name": "powHash",
        "schema": {
          "description": "Current block header PoW hash.",
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "mixHash",
        "schema": {
          "description": "The mix digest.",
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
    ],
    "result": {
      "name": "solutionValid",
      "description": "returns true if the provided solution is valid, otherwise false.",
      "schema": {
        "type": "boolean",
        "description": "Whether or not the provided solution is valid",
      },
    },
  },
  {
    "name": "eth_submitHashrate",
    "summary": "Returns an array of all logs matching a given filter object.",
    "params": [
      {
        "name": "hashRate",
        "schema": {
          "type": "string",
          "description": "Hex representation of a 256 bit unit of data",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "id",
        "description": "String identifiying the client",
        "schema": {
          "type": "string",
          "description": "Hex representation of a 256 bit unit of data",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
    ],
    "result": {
      "name": "submitHashRateSuccess",
      "schema": {
        "type": "boolean",
        "description": "whether of not submitting went through succesfully",
      },
    },
  },
  {
    "name": "eth_getProof",
    "summary": "Returns the account- and storage-values of the specified account including the Merkle-proof.",
    "params": [
      {
        "name": "address",
        "description": "The address of the account or contract",
        "required": true,
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "storageKeys",
        "schema": {
          "description": "The storage keys of all the storage slots being requested",
          "items": {
            "description": "A storage key is indexed from the solidity compiler by the order it is declaired. For mappings it uses the keccak of the mapping key with its position (and recursively for X-dimentional mappings)",
            "type": "string",
          },
        },
      },
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
    ],
    "result": {
      "name": "account",
      "schema": {
        "type": "object",
        "description": "The merkle proofs of the specified account connecting them to the blockhash of the block specified",
        "properties": {
          "address": {
            "description": "The address of the account or contract of the request",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "accountProof": {
            "type": "array",
            "description": "The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value",
            "items": {
              "type": "string",
              "description": "An indiviual node used to prove a path down a merkle-patricia-tree",
            },
          },
          "balance": {
            "description": "The Ether balance of the account or contract of the request",
            "type": "string",
          },
          "codeHash": {
            "description": "The code hash of the contract of the request (keccak(NULL) if external account)",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "nonce": {
            "description": "The transaction count of the account or contract of the request",
            "type": "string",
          },
          "storageHash": {
            "description": "The storage hash of the contract of the request (keccak(rlp(NULL)) if external account)",
            "type": "string",
            "pattern": "^0x[a-fA-F\\d]+$",
          },
          "storageProof": {
            "type": "array",
            "description": "Current block header PoW hash.",
            "items": {
              "type": "object",
              "description": "Object proving a relationship of a storage value to an account's storageHash.",
              "properties": {
                "key": {
                  "description": "The key used to get the storage slot in its account tree",
                  "type": "string",
                },
                "value": {
                  "description": "The value of the storage slot in its account tree",
                  "type": "string",
                },
                "proof": {
                  "type": "array",
                  "description": "The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value",
                  "items": {
                    "type": "string",
                    "description": "An indiviual node used to prove a path down a merkle-patricia-tree",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_getCode",
    "summary": "Returns code at a given contract address",
    "params": [
      {
        "name": "address",
        "description": "The address of the contract",
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "blockNumber",
        "description": "A BlockNumber of which the code existed",
        "schema": {
          "type": "string",
          "description": "The hex representation of the block's height",
        },
      },
    ],
    "result": {
      "name": "bytes",
      "schema": {
        "type": "string",
        "description": "Hex representation of a variable length byte array",
      },
    },
  },
  {
    "name": "eth_getBalance",
    "summary": "Returns Ether balance of a given or account or contract",
    "params": [
      {
        "name": "address",
        "description": "The address of the acccount or contract",
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "blockNumber",
        "description": "A BlockNumber at which to request the balance",
        "schema": {
          "type": "string",
          "description": "The hex representation of the block's height",
        },
      },
    ],
    "result": {
      "name": "integer",
      "schema": {
        "type": "string",
        "description": "Hex representation of the integer",
      },
    },
  },
  {
    "name": "eth_sign",
    "summary": "The sign method calculates an Ethereum specific signature with: sign(keccak256( '\\x19Ethereum Signed Message:\\n' + len(message) + message))).",
    "params": [
      {
        "name": "address",
        "description": "The address of the account who's signature to use.",
        "schema": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
      {
        "name": "message",
        "description": "The message to sign",
        "schema": {
          "type": "string",
          "description": "Hex representation of a variable length byte array",
        },
      },
    ],
    "result": {
      "name": "signatureData",
      "schema": {
        "description": "The signature data.",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_account",
    "summary": "Returns a list of accounts owned by the client",
    "params": [],
    "result": {
      "name": "addresses",
      "schema": {
        "description": "An array of addresses owned by the client",
        "type": "array",
        "items": {
          "type": "string",
          "pattern": "^0x[a-fA-F\\d]+$",
        },
      },
    },
  },
  {
    "name": "eth_gasPrice",
    "summary": "Returns the current price per gas in wei",
    "params": [],
    "result": {
      "name": "gasPrice",
      "schema": {
        "description": "Integer of the current gas price",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_hashrate",
    "summary": "Returns the number of hashes per second that the node is mining with.",
    "params": [],
    "result": {
      "name": "hashesPerSecond",
      "schema": {
        "description": "Integer of the number of hashes per second",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_mining",
    "summary": "Returns true if client is actively mining new blocks.",
    "params": [],
    "result": {
      "name": "mining",
      "schema": {
        "description": "Whether of not the client is mining",
        "type": "boolean",
      },
    },
  },
  {
    "name": "eth_coinbase",
    "summary": "Returns the client coinbase address.",
    "params": [],
    "result": {
      "name": "address",
      "schema": {
        "description": "The address owned by the client that is used as default for things like the mining reward",
        "type": "string",
        "pattern": "^0x[a-fA-F\\d]+$",
      },
    },
  },
  {
    "name": "eth_protocolVersion",
    "summary": "Returns the current ethereum protocol version.",
    "params": [],
    "result": {
      "name": "protocolVersion",
      "schema": {
        "description": "The current ethereum protocol version",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_blockTransactionCountByHash",
    "summary": "Returns the number of transactions in a block from a block matching the given block hash.",
    "params": [
      {
        "name": "blockHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the Keccak 256 of the RLP encoded block",
        },
      },
    ],
    "result": {
      "name": "blockTransactionCountByHash",
      "schema": {
        "description": "The Number of total transactions in the given block",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_blockTransactionCountByNumber",
    "summary": "Returns the number of transactions in a block from a block matching the given block number.",
    "params": [
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
    ],
    "result": {
      "name": "blocktransactionCountByNumber",
      "schema": {
        "description": "The Number of total transactions in the given block",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_getUncleCountByBlockHash",
    "summary": "Returns the number of uncles in a block from a block matching the given block hash.",
    "params": [
      {
        "name": "blockHash",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The hex representation of the Keccak 256 of the RLP encoded block",
        },
      },
    ],
    "result": {
      "name": "uncleCount",
      "schema": {
        "description": "The Number of total uncles in the given block",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_getUncleCountByBlockNumber",
    "summary": "Returns the number of uncles in a block from a block matching the given block number.",
    "params": [
      {
        "name": "blockNumber",
        "required": true,
        "schema": {
          "oneOf": [
            {
              "type": "string",
              "description": "The hex representation of the block's height",
            },
            {
              "type": "string",
              "description": "The optional block height description",
              "enum": [
                "earliest",
                "latest",
                "pending",
              ],
            },
          ],
        },
      },
    ],
    "result": {
      "name": "uncleCount",
      "schema": {
        "description": "The Number of total uncles in the given block",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_sendTransaction",
    "summary": "Creates new message call transaction or a contract creation, if the data field contains code.",
    "params": [
      {
        "required": true,
        "name": "transaction",
        "schema": {
          "type": "object",
          "properties": {
            "from": {
              "description": "Address of the sender",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "to": {
              "description": "address of the receiver. optional if it's a contract creation transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "gas": {
              "type": "string",
              "description": "The gas limit provided by the sender in Wei. default 90000",
            },
            "gasPrice": {
              "type": "string",
              "description": "The gas price willing to be paid by the sender in Wei",
            },
            "value": {
              "description": "Value of Ether being transferred in Wei",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "data": {
              "type": "string",
              "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
            },
            "nonce": {
              "description": "The total number of prior transactions made by the sender.",
              "type": "string",
            },
          },
        },
      },
    ],
    "result": {
      "name": "transactionHash",
      "schema": {
        "description": "The transaction hash, or the zero hash if the transaction is not yet available.",
        "type": "string",
        "pattern": "^0x[a-fA-F\\d]+$",
      },
    },
  },
  {
    "name": "eth_sendRawTransaction",
    "summary": "Creates new message call transaction or a contract creation for signed transactions.",
    "params": [
      {
        "name": "signedTransactionData",
        "description": "The signed transaction data",
        "schema": {
          "type": "string",
          "description": "Hex representation of a variable length byte array",
        },
      },
    ],
    "result": {
      "name": "transactionHash",
      "schema": {
        "description": "The transaction hash, or the zero hash if the transaction is not yet available.",
        "type": "string",
        "pattern": "^0x[a-fA-F\\d]+$",
      },
    },
  },
  {
    "name": "eth_call",
    "summary": "Executes a new message call (locally) immediately without creating a transaction on the block chain.",
    "params": [
      {
        "required": true,
        "name": "transaction",
        "schema": {
          "type": "object",
          "properties": {
            "from": {
              "description": "Address of the sender",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "to": {
              "description": "address of the receiver. optional if it's a contract creation transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "gas": {
              "type": "string",
              "description": "The gas limit provided by the sender in Wei. default 90000",
            },
            "gasPrice": {
              "type": "string",
              "description": "The gas price willing to be paid by the sender in Wei",
            },
            "value": {
              "description": "Value of Ether being transferred in Wei",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "data": {
              "type": "string",
              "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
            },
            "nonce": {
              "description": "The total number of prior transactions made by the sender.",
              "type": "string",
            },
          },
        },
      },
    ],
    "result": {
      "name": "returnValue",
      "schema": {
        "description": "The return value of the executed contract",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_estimateGas",
    "summary": "Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.",
    "params": [
      {
        "required": true,
        "name": "transaction",
        "schema": {
          "type": "object",
          "properties": {
            "from": {
              "description": "Address of the sender",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "to": {
              "description": "address of the receiver. optional if it's a contract creation transaction",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "gas": {
              "type": "string",
              "description": "The gas limit provided by the sender in Wei. default 90000",
            },
            "gasPrice": {
              "type": "string",
              "description": "The gas price willing to be paid by the sender in Wei",
            },
            "value": {
              "description": "Value of Ether being transferred in Wei",
              "type": "string",
              "pattern": "^0x[a-fA-F\\d]+$",
            },
            "data": {
              "type": "string",
              "description": "The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.",
            },
            "nonce": {
              "description": "The total number of prior transactions made by the sender.",
              "type": "string",
            },
          },
        },
      },
    ],
    "result": {
      "name": "gasUsed",
      "schema": {
        "description": "The amount of gas used",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_syncing",
    "summary": "Returns an object with data about the sync status or false.",
    "params": [],
    "result": {
      "name": "syncing",
      "schema": {
        "oneOf": [
          {
            "description": "An object with sync status data",
            "type": "object",
            "properties": {
              "startingBlock": {
                "description": "Block at which the import started (will only be reset, after the sync reached his head)",
                "type": "string",
              },
              "currentBlock": {
                "description": "The current block, same as eth_blockNumber",
                "type": "string",
              },
              "highestBlock": {
                "description": "The estimated highest block",
                "type": "string",
              },
              "knownStates": {
                "description": "The known states",
                "type": "string",
              },
              "pulledStates": {
                "description": "The pulled states",
                "type": "string",
              },
            },
          },
          {
            "type": "boolean",
            "description": "The value `false` indicating that syncing is complete",
          },
        ],
      },
    },
  },
  {
    "name": "eth_getCompilers",
    "summary": "Returns a list of available compilers in the client.",
    "params": [],
    "result": {
      "name": "compilers",
      "schema": {
        "type": "array",
        "description": "Array of available compilers.",
        "items": {
          "description": "Name of an available compiler",
          "type": "string",
        },
      },
    },
  },
  {
    "name": "eth_compileSolidity",
    "summary": "Returns compiled solidity code.",
    "params": [
      {
        "name": "code",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The Solidity code string (no new-lines).",
        },
      },
    ],
    "result": {
      "name": "codeResponse",
      "schema": {
        "type": "object",
        "description": "An object containing information about the code.",
        "properties": {
          "code": {
            "description": "The compiled Byte code",
            "type": "string",
          },
          "info": {
            "description": "An object contianing information about the code compilation.",
            "type": "object",
            "properties": {
              "source": {
                "type": "string",
                "description": "The sorce code that was compiled",
              },
              "language": {
                "type": "string",
                "description": "The language of the code that was compiled",
              },
              "languageVersion": {
                "type": "string",
                "description": "The language version number",
              },
              "compilerVersion": {
                "type": "string",
                "description": "The sorce code that was compiled",
              },
              "abiDefinition": {
                "type": "object",
                "description": "The application binary interface definitions of the code",
              },
            },
          },
        },
      },
    },
  },
  {
    "name": "eth_compileLLL",
    "summary": "Returns compiled LLL code.",
    "params": [
      {
        "name": "code",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The LLL code string (no new-lines).",
        },
      },
    ],
    "result": {
      "name": "copmiledCode",
      "schema": {
        "description": "The compiled Byte code",
        "type": "string",
      },
    },
  },
  {
    "name": "eth_compileSerpent",
    "summary": "Returns compiled Serpent code.",
    "params": [
      {
        "name": "code",
        "required": true,
        "schema": {
          "type": "string",
          "description": "The Serpent code string (no new-lines).",
        },
      },
    ],
    "result": {
      "name": "compiledCode",
      "schema": {
        "description": "The compiled Byte code",
        "type": "string",
      },
    },
  },
];
    if (options.transport === undefined || options.transport.type === undefined) {
      throw new Error("Invalid constructor params");
    }
    this.rpc = (jayson.Client as any)[options.transport.type](options.transport);
    this.validator = new ajv();
    this.methods.forEach((method) => {
      method.params.forEach((param: any, i: number) => {
        return this.validator.addSchema(
          param.schema,
          makeIdForMethodContentDescriptors(method, param),
        );
      });
    });
  }

  public validate(methodName: string, methodObject: any, params: any[]) {
    return _.chain((methodObject as any).params)
      .map((param: any, index: number) => {
        const idForMethod = makeIdForMethodContentDescriptors(methodObject, param);
        const isValid = this.validator.validate(idForMethod, params[index]);
        if (!isValid) {
          const message = [
            "Expected param in position ",
            index,
            " to match the json schema: ",
            JSON.stringify(param.schema, undefined, "  "),
            ". The function received instead ",
            params[index],
            ".",
          ].join("");
          const err = new ParameterValidationError(message, this.validator.errors);
          return err;
        }
      })
      .compact()
      .value();
  }

  public request({method, params}: any) {
    const methodObject = _.find(this.methods, ({name}: any) => name === method);
    const openRpcMethodValidationErrors = this.validate(method, methodObject, params);
    if (openRpcMethodValidationErrors.length > 0) {
      return Promise.reject(openRpcMethodValidationErrors);
    }

    let rpcParams;
    if (methodObject.paramStructure && methodObject.paramStructure === "by-name") {
      rpcParams = _.zipObject(params, _.map(methodObject.params, "name"));
    } else {
      rpcParams = Array.from(arguments);
    }
    const result: any = this.rpc.request(method, rpcParams);
    return result.then((r: any) => r.result);
  }

  /**
   * Gets a block for a given hash
   */
  public eth_getBlockByHash(blockHash: TBlockHash, includeTransactions: TIncludeTransactions): Promise<IBlock> {
    return this.request({method: "eth_getBlockByHash", params: Array.from(arguments)});
  }
  /**
   * Gets a block for a given number
   */
  public eth_getBlockByNumber(blockNumber: TBlockNumber, includeTransactions: TIncludeTransactions): Promise<IBlock> {
    return this.request({method: "eth_getBlockByNumber", params: Array.from(arguments)});
  }
  /**
   * Gets a block for a given number
   */
  public eth_blockNumber(): Promise<TBlockNumber> {
    return this.request({method: "eth_blockNumber", params: Array.from(arguments)});
  }
  /**
   * Gets a storage value from a contract address, a position, and an optional blockNumber
   */
  public eth_getStorageAt(address: TAddress, key: TKey, blockNumber: TBlockNumber): Promise<TDataWord> {
    return this.request({method: "eth_getStorageAt", params: Array.from(arguments)});
  }
  /**
   * Returns the number of transactions sent from an address
   */
  public eth_getTransactionCount(address: TAddress, blockNumber: TBlockNumber): Promise<TNonce> {
    return this.request({method: "eth_getTransactionCount", params: Array.from(arguments)});
  }
  /**
   * Returns the information about a transaction requested by transaction hash.
   */
  public eth_getTransactionByHash(transactionHash: TTransactionHash): Promise<ITransaction> {
    return this.request({method: "eth_getTransactionByHash", params: Array.from(arguments)});
  }
  /**
   * Returns the information about a transaction requested by the block hash and index of which it was mined.
   */
  public eth_getTransactionByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<ITransaction> {
    return this.request({method: "eth_getTransactionByBlockHashAndIndex", params: Array.from(arguments)});
  }
  /**
   * Returns the information about a transaction requested by the block hash and index of which it was mined.
   */
  public eth_getTransactionByBlockNumberAndIndex(blockNumber: TBlockNumber, index: TIndex): Promise<ITransaction> {
    return this.request({method: "eth_getTransactionByBlockNumberAndIndex", params: Array.from(arguments)});
  }
  /**
   * Returns the receipt information of a transaction by its hash.
   */
  public eth_getTransactionReceipt(transactionHash: TTransactionHash): Promise<IReceipt> {
    return this.request({method: "eth_getTransactionReceipt", params: Array.from(arguments)});
  }
  /**
   * Returns information about a uncle of a block by hash and uncle index position.
   */
  public eth_getUncleByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IUncle> {
    return this.request({method: "eth_getUncleByBlockHashAndIndex", params: Array.from(arguments)});
  }
  /**
   * Returns information about a uncle of a block by hash and uncle index position.
   */
  public eth_getUncleByBlockNumberAndIndex(uncleBlockNumber: TUncleBlockNumber, index: TIndex): Promise<IUncle> {
    return this.request({method: "eth_getUncleByBlockNumberAndIndex", params: Array.from(arguments)});
  }
  /**
   * Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.
   */
  public eth_newFilter(filter: IFilter): Promise<TFilterId> {
    return this.request({method: "eth_newFilter", params: Array.from(arguments)});
  }
  /**
   * Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.
   */
  public eth_newBlockFilter(): Promise<TFilterId> {
    return this.request({method: "eth_newBlockFilter", params: Array.from(arguments)});
  }
  /**
   * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.
   */
  public eth_newPendingTransactionFilter(): Promise<TFilterId> {
    return this.request({method: "eth_newPendingTransactionFilter", params: Array.from(arguments)});
  }
  /**
   * Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.
   */
  public eth_uninstallFilter(filterId: TFilterId): Promise<TFilterUninstalledSuccess> {
    return this.request({method: "eth_uninstallFilter", params: Array.from(arguments)});
  }
  /**
   * Polling method for a filter, which returns an array of logs which occurred since last poll.
   */
  public eth_getFilterChanges(filterId: TFilterId): Promise<I> {
    return this.request({method: "eth_getFilterChanges", params: Array.from(arguments)});
  }
  /**
   * Returns an array of all logs matching filter with given id.
   */
  public eth_getFilterLogs(filterId: TFilterId): Promise<ILogs> {
    return this.request({method: "eth_getFilterLogs", params: Array.from(arguments)});
  }
  /**
   * Returns an array of all logs matching a given filter object.
   */
  public eth_getLogs(filter: IFilter): Promise<ILogs> {
    return this.request({method: "eth_getLogs", params: Array.from(arguments)});
  }
  /**
   * Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
   */
  public eth_getWork(): Promise<IWork> {
    return this.request({method: "eth_getWork", params: Array.from(arguments)});
  }
  /**
   * Used for submitting a proof-of-work solution.
   */
  public eth_submitWork(nonce: TNonce, powHash: TPowHash, mixHash: TMixHash): Promise<TSolutionValid> {
    return this.request({method: "eth_submitWork", params: Array.from(arguments)});
  }
  /**
   * Returns an array of all logs matching a given filter object.
   */
  public eth_submitHashrate(hashRate: THashRate, id: TId): Promise<TSubmitHashRateSuccess> {
    return this.request({method: "eth_submitHashrate", params: Array.from(arguments)});
  }
  /**
   * Returns the account- and storage-values of the specified account including the Merkle-proof.
   */
  public eth_getProof(address: TAddress, storageKeys: TStorageKeys, blockNumber: TBlockNumber): Promise<IAccount> {
    return this.request({method: "eth_getProof", params: Array.from(arguments)});
  }
  /**
   * Returns code at a given contract address
   */
  public eth_getCode(address: TAddress, blockNumber: TBlockNumber): Promise<TBytes> {
    return this.request({method: "eth_getCode", params: Array.from(arguments)});
  }
  /**
   * Returns Ether balance of a given or account or contract
   */
  public eth_getBalance(address: TAddress, blockNumber: TBlockNumber): Promise<TInteger> {
    return this.request({method: "eth_getBalance", params: Array.from(arguments)});
  }
  /**
   * The sign method calculates an Ethereum specific signature with: sign(keccak256( '\x19Ethereum Signed Message:\n' + len(message) + message))).
   */
  public eth_sign(address: TAddress, message: TMessage): Promise<TSignatureData> {
    return this.request({method: "eth_sign", params: Array.from(arguments)});
  }
  /**
   * Returns a list of accounts owned by the client
   */
  public eth_account(): Promise<IAddresses> {
    return this.request({method: "eth_account", params: Array.from(arguments)});
  }
  /**
   * Returns the current price per gas in wei
   */
  public eth_gasPrice(): Promise<TGasPrice> {
    return this.request({method: "eth_gasPrice", params: Array.from(arguments)});
  }
  /**
   * Returns the number of hashes per second that the node is mining with.
   */
  public eth_hashrate(): Promise<THashesPerSecond> {
    return this.request({method: "eth_hashrate", params: Array.from(arguments)});
  }
  /**
   * Returns true if client is actively mining new blocks.
   */
  public eth_mining(): Promise<TMining> {
    return this.request({method: "eth_mining", params: Array.from(arguments)});
  }
  /**
   * Returns the client coinbase address.
   */
  public eth_coinbase(): Promise<TAddress> {
    return this.request({method: "eth_coinbase", params: Array.from(arguments)});
  }
  /**
   * Returns the current ethereum protocol version.
   */
  public eth_protocolVersion(): Promise<TProtocolVersion> {
    return this.request({method: "eth_protocolVersion", params: Array.from(arguments)});
  }
  /**
   * Returns the number of transactions in a block from a block matching the given block hash.
   */
  public eth_blockTransactionCountByHash(blockHash: TBlockHash): Promise<TBlockTransactionCountByHash> {
    return this.request({method: "eth_blockTransactionCountByHash", params: Array.from(arguments)});
  }
  /**
   * Returns the number of transactions in a block from a block matching the given block number.
   */
  public eth_blockTransactionCountByNumber(blockNumber: TBlockNumber): Promise<TBlocktransactionCountByNumber> {
    return this.request({method: "eth_blockTransactionCountByNumber", params: Array.from(arguments)});
  }
  /**
   * Returns the number of uncles in a block from a block matching the given block hash.
   */
  public eth_getUncleCountByBlockHash(blockHash: TBlockHash): Promise<TUncleCount> {
    return this.request({method: "eth_getUncleCountByBlockHash", params: Array.from(arguments)});
  }
  /**
   * Returns the number of uncles in a block from a block matching the given block number.
   */
  public eth_getUncleCountByBlockNumber(blockNumber: TBlockNumber): Promise<TUncleCount> {
    return this.request({method: "eth_getUncleCountByBlockNumber", params: Array.from(arguments)});
  }
  /**
   * Creates new message call transaction or a contract creation, if the data field contains code.
   */
  public eth_sendTransaction(transaction: ITransaction): Promise<TTransactionHash> {
    return this.request({method: "eth_sendTransaction", params: Array.from(arguments)});
  }
  /**
   * Creates new message call transaction or a contract creation for signed transactions.
   */
  public eth_sendRawTransaction(signedTransactionData: TSignedTransactionData): Promise<TTransactionHash> {
    return this.request({method: "eth_sendRawTransaction", params: Array.from(arguments)});
  }
  /**
   * Executes a new message call (locally) immediately without creating a transaction on the block chain.
   */
  public eth_call(transaction: ITransaction): Promise<TReturnValue> {
    return this.request({method: "eth_call", params: Array.from(arguments)});
  }
  /**
   * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
   */
  public eth_estimateGas(transaction: ITransaction): Promise<TGasUsed> {
    return this.request({method: "eth_estimateGas", params: Array.from(arguments)});
  }
  /**
   * Returns an object with data about the sync status or false.
   */
  public eth_syncing(): Promise<TSyncing> {
    return this.request({method: "eth_syncing", params: Array.from(arguments)});
  }
  /**
   * Returns a list of available compilers in the client.
   */
  public eth_getCompilers(): Promise<ICompilers> {
    return this.request({method: "eth_getCompilers", params: Array.from(arguments)});
  }
  /**
   * Returns compiled solidity code.
   */
  public eth_compileSolidity(code: TCode): Promise<ICodeResponse> {
    return this.request({method: "eth_compileSolidity", params: Array.from(arguments)});
  }
  /**
   * Returns compiled LLL code.
   */
  public eth_compileLLL(code: TCode): Promise<TCopmiledCode> {
    return this.request({method: "eth_compileLLL", params: Array.from(arguments)});
  }
  /**
   * Returns compiled Serpent code.
   */
  public eth_compileSerpent(code: TCode): Promise<TCompiledCode> {
    return this.request({method: "eth_compileSerpent", params: Array.from(arguments)});
  }
}
