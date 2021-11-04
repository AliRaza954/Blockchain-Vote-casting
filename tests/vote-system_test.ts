
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.14.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure the working of the smart contract",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        let wallet_1 = accounts.get('wallet_1')!;
        let block = chain.mineBlock([
            Tx.contractCall('vote-system', 'get-stats', [types.ascii("PTI"), types.ascii("BAT")], wallet_1.address),
            Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313623"), types.ascii("12/23/1985")], wallet_1.address),
            Tx.contractCall('vote-system', 'vote', [types.ascii("PTI"), types.ascii("BAT")], wallet_1.address),

            //Tx.contractCall('vote-system', 'get-stats', [types.ascii("PTI"), types.ascii("BAT")], wallet_1.address),
            //Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313625"), types.ascii("04/25/1976")], wallet_1.address),
            //Tx.contractCall('vote-system', 'vote', [types.ascii("PML"), types.ascii("LION")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313634"), types.ascii("10/30/1934")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("POL"), types.ascii("HAWk")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313456"), types.ascii("07/25/1987")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("PPP"), types.ascii("ARROW")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313667"), types.ascii("02/15/1990")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("PLN"), types.ascii("HORSE")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313612"), types.ascii("08/28/1956")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("PCL"), types.ascii("JUGG")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313123"), types.ascii("09/28/1909")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("AML"), types.ascii("HUG")], wallet_1.address),

            // Tx.contractCall('vote-system', 'reg', [types.ascii("3222202313234"), types.ascii("02/24/1978")], wallet_1.address),
            // Tx.contractCall('vote-system', 'vote', [types.ascii("ANC"), types.ascii("DOVE")], wallet_1.address),
        ]);
        assertEquals(block.receipts.length, 3);
        assertEquals(block.height, 2);

        block.receipts[0].result
        .expectUint(0)

        block.receipts[1].result
        .expectOk()
        .expectAscii("Registration Successful!")

        block.receipts[2].result
        .expectOk()
        .expectAscii("Vote casted successfully!")

        // block.receipts[3].result
        // .expectUint(3)

        // block.receipts[4].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[5].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[5].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[6].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[7].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[8].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[9].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[10].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[11].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[12].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[13].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[14].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[15].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[16].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        // block.receipts[17].result
        // .expectOk()
        // .expectAscii("Registration Successful!")

        // block.receipts[18].result
        // .expectOk()
        // .expectAscii("Vote casted successfully!")

        /*block = chain.mineBlock([
            /* 
             * Add transactions with: 
             * Tx.contractCall(...)
            
        ]);
        assertEquals(block.receipts.length, 0);
        assertEquals(block.height, 3);*/
    },
});
