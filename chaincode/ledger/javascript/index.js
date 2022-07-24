/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const Ledger = require('./lib/ledger');

module.exports.Ledger = Ledger;
module.exports.contracts = [ Ledger ];
