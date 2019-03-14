import * as jayson from "jayson/promise";
import ajv from "ajv";
/**
 * The hex representation of the Keccak 256 of the RLP encoded block
 */
export declare type TBlockHash = string;
export declare type TIncludeTransactions = boolean;
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
    transactions?: ({
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
    } | string)[];
    /**
     * Array of uncle hashes
     */
    uncles?: string[];
    [k: string]: any;
}
export declare type TBlockNumber = string | ("earliest" | "latest" | "pending");
export declare type TAddress = string;
/**
 * Hex representation of the storage slot where the variable exists
 */
export declare type TKey = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type TBROKEN = string;
/**
 * Keccak 256 Hash of the RLP encoding of a transaction
 */
export declare type TTransactionHash = string;
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
export declare type TIndex = string;
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
export declare type TFilterId = string;
/**
 * A number only to be used once
 */
export declare type TNonce = string;
/**
 * Current block header PoW hash.
 */
export declare type TPowHash = string;
/**
 * The mix digest.
 */
export declare type TMixHash = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type THashRate = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type TId = string;
/**
 * The storage keys of all the storage slots being requested
 */
export declare type TStorageKeys = string[];
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
export declare type TCode = string;
export default class MultiGethRpc {
    rpc: jayson.Client;
    methods: Array<any>;
    validator: ajv.Ajv;
    constructor(options: any);
    /**
     * Gets a block for a given hash
     */
    eth_getBlockByHash(blockHash: TBlockHash, includeTransactions: TIncludeTransactions): Promise<IBlock>;
    /**
     * Gets a block for a given number
     */
    eth_getBlockByNumber(blockNumber: TBlockNumber, includeTransactions: TIncludeTransactions): Promise<IBlock>;
    /**
     * Gets a block for a given number
     */
    eth_blockNumber(): Promise<TBlockNumber>;
    /**
     * Gets a storage value from a contract address, a position, and an optional blockNumber
     */
    eth_getStorageAt(address: TAddress, key: TKey, blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * Returns the number of transactions sent from an address
     */
    eth_getTransactionCount(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * Returns the information about a transaction requested by transaction hash.
     */
    eth_getTransactionByHash(transactionHash: TTransactionHash): Promise<IBROKEN>;
    /**
     * Returns the information about a transaction requested by the block hash and index of which it was mined.
     */
    eth_getTransactionByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IBROKEN>;
    /**
     * Returns the information about a transaction requested by the block hash and index of which it was mined.
     */
    eth_getTransactionByBlockNumberAndIndex(blockNumber: TBlockNumber, index: TIndex): Promise<IBROKEN>;
    /**
     * Returns the receipt information of a transaction by its hash.
     */
    eth_getTransactionReceipt(transactionHash: TTransactionHash): Promise<IBROKEN>;
    /**
     * Returns information about a uncle of a block by hash and uncle index position.
     */
    eth_getUncleByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IBROKEN>;
    /**
     * Returns information about a uncle of a block by hash and uncle index position.
     */
    eth_getUncleByBlockNumberAndIndex(blockNumber: TBlockNumber, index: TIndex): Promise<IBROKEN>;
    /**
     * Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newFilter(filter: IFilter): Promise<TBROKEN>;
    /**
     * Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newBlockFilter(): Promise<TBROKEN>;
    /**
     * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newPendingTransactionFilter(): Promise<TBROKEN>;
    /**
     * Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.
     */
    eth_uninstallFilter(filterId: TFilterId): Promise<TBROKEN>;
    /**
     * Polling method for a filter, which returns an array of logs which occurred since last poll.
     */
    eth_getFilterChanges(filterId: TFilterId): Promise<IBROKEN>;
    /**
     * Returns an array of all logs matching filter with given id.
     */
    eth_getFilterLogs(filterId: TFilterId): Promise<IBROKEN>;
    /**
     * Returns an array of all logs matching a given filter object.
     */
    eth_getLogs(filter: IFilter): Promise<IBROKEN>;
    /**
     * Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
     */
    eth_getWork(): Promise<IBROKEN>;
    /**
     * Used for submitting a proof-of-work solution.
     */
    eth_submitWork(nonce: TNonce, powHash: TPowHash, mixHash: TMixHash): Promise<TBROKEN>;
    /**
     * Returns an array of all logs matching a given filter object.
     */
    eth_submitHashrate(hashRate: THashRate, id: TId): Promise<TBROKEN>;
    /**
     * Returns the account- and storage-values of the specified account including the Merkle-proof.
     */
    eth_getProof(address: TAddress, storageKeys: TStorageKeys, blockNumber: TBlockNumber): Promise<IBROKEN>;
    /**
     * Returns code at a given contract address
     */
    eth_getCode(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * Returns Ether balance of a given or account or contract
     */
    eth_getBalance(address: TAddress, blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * The sign method calculates an Ethereum specific signature with: sign(keccak256( '\x19Ethereum Signed Message:
  ' + len(message) + message))).
     */
    eth_sign(address: TAddress, BROKEN: TBROKEN): Promise<TBROKEN>;
    /**
     * Returns a list of accounts owned by the client
     */
    eth_account(): Promise<IBROKEN>;
    /**
     * Returns the current price per gas in wei
     */
    eth_gasPrice(): Promise<TBROKEN>;
    /**
     * Returns the number of hashes per second that the node is mining with.
     */
    eth_hashrate(): Promise<TBROKEN>;
    /**
     * Returns true if client is actively mining new blocks.
     */
    eth_mining(): Promise<TBROKEN>;
    /**
     * Returns the client coinbase address.
     */
    eth_coinbase(): Promise<TBROKEN>;
    /**
     * Returns the current ethereum protocol version.
     */
    eth_protocolVersion(): Promise<TBROKEN>;
    /**
     * Returns the number of transactions in a block from a block matching the given block hash.
     */
    eth_blockTransactionCountByHash(blockHash: TBlockHash): Promise<TBROKEN>;
    /**
     * Returns the number of transactions in a block from a block matching the given block number.
     */
    eth_blockTransactionCountByNumber(blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * Returns the number of uncles in a block from a block matching the given block hash.
     */
    eth_getUncleCountByBlockHash(blockHash: TBlockHash): Promise<TBROKEN>;
    /**
     * Returns the number of uncles in a block from a block matching the given block number.
     */
    eth_getUncleCountByBlockNumber(blockNumber: TBlockNumber): Promise<TBROKEN>;
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code.
     */
    eth_sendTransaction(transaction: ITransaction): Promise<TBROKEN>;
    /**
     * Creates new message call transaction or a contract creation for signed transactions.
     */
    eth_sendRawTransaction(BROKEN: TBROKEN): Promise<TBROKEN>;
    /**
     * Executes a new message call (locally) immediately without creating a transaction on the block chain.
     */
    eth_call(transaction: ITransaction): Promise<TBROKEN>;
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
     */
    eth_estimateGas(transaction: ITransaction): Promise<TBROKEN>;
    /**
     * Returns an object with data about the sync status or false.
     */
    eth_syncing(): Promise<TBROKEN>;
    /**
     * Returns a list of available compilers in the client.
     */
    eth_getCompilers(): Promise<IBROKEN>;
    /**
     * Returns compiled solidity code.
     */
    eth_compileSolidity(code: TCode): Promise<IBROKEN>;
    /**
     * Returns compiled LLL code.
     */
    eth_compileLLL(code: TCode): Promise<TBROKEN>;
    /**
     * Returns compiled Serpent code.
     */
    eth_compileSerpent(code: TCode): Promise<TBROKEN>;
}
