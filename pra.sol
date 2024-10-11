price = quoter.quoteExactInputSingle(
            pairToken,
            token,
            500,
            amount,
            0
        );
        if (amountOut < price) {
            amountOut = price;
            dexName = 0; // Uniswap V3
        }
        //Uniswap v3 0.3% Quote//0xc473e2aEE3441BF9240Be85eb122aBB059A3B57c
        price = quoter.quoteExactInputSingle(
            pairToken,
            token,
            3000,
            amount,
            0
        );
        if (amountOut < price) {
            amountOut = price;
            dexName = 1; // Uniswap V3
        }

        // Camelot Quote
        uint16 fee1;
        (price, fee1) = camelotQuoter.quoteExactInputSingle(
            pairToken,
            token,
            amount,
            0
        );
        if (amountOut < price) {
            amountOut = price;
            dexName = 2; // Camelot
        }
        QuoteResult result;
        //PancakeSwap Quote 0.01%//0x7fCDC35463E3770c2fB992716Cd070B63540b947
       (
            result.price,
            result.sqrtPriceX96After,
            result.initializedTicksCrossed,
            result.gasEstimate
        ) = pancakeswapQuoter.quoteExactInputSingle(
            pancakeswapIQuoterV2.QuoteExactInputSingleParams(
                pairToken,
                token,
                amount,
                100,
                0
            )
        );
        if (amountOut < result.price) {
            amountOut = result.price;
            dexName = 3; // PancakeSwap
        }
        //PancakeSwap Quote 0.05%//0xd9e2a1a61B6E61b275cEc326465d417e52C1b95c
        (
            result.price,
            result.sqrtPriceX96After,
            result.initializedTicksCrossed,
            result.gasEstimate
        ) = pancakeswapQuoter.quoteExactInputSingle(
            pancakeswapIQuoterV2.QuoteExactInputSingleParams(
                pairToken,
                token,
                amount,
                500,
                0
            )
        );
        if (amountOut < result.price) {
            amountOut = result.price;
            dexName = 4; // PancakeSwap
        }

        //Sushiswap Quote 0.05%//0xf3Eb87C1F6020982173C908E7eB31aA66c1f0296
        (
            result.price,
            result.sqrtPriceX96After,
            result.initializedTicksCrossed,
            result.gasEstimate
        ) = sushiswapQuoter.quoteExactInputSingle(
            sushiswapIQuoterV2.QuoteExactInputSingleParams(
                pairToken,
                token,
                amount,
                500,
                0
            )
        );
        if (amountOut < result.price) {
            amountOut = result.price;
            dexName = 5; // sushiswap
        }
        //Sushiswap Quote 0.05%//0xB658eE5c63922d2852f24458efFA2Bfa2cBA3574
        (
            result.price,
            result.sqrtPriceX96After,
            result.initializedTicksCrossed,
            result.gasEstimate
        ) = sushiswapQuoter.quoteExactInputSingle(
            sushiswapIQuoterV2.QuoteExactInputSingleParams(
                pairToken,
                token,
                amount,
                100,
                0
            )
        );
        if (amountOut < result.price) {
            amountOut = result.price;
            dexName = 6; // sushiswap
        }