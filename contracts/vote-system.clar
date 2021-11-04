;; Vote Casting Smart Contract

;; Constants 
;; Errors
(define-constant err-same-id (err "Voter has been registered, please come up with new CNIC and make new registration"))
(define-constant err-incorrect-cnic (err "Entered CNIC is not correct"))
(define-constant err-same-cnic (err "CNIC already exists"))
(define-constant err-same-vote (err "vote has already been casted against this cnic"))

;; Mapping ==> voter-registration
(define-map register {voter-address: principal} {cnic: (string-ascii 13), dob: (string-ascii 10)} )

;; Mapping ==> voting 
(define-map voting {voter-address: principal} {name: (string-ascii 10), symbol: (string-ascii 10)})

;; Mapping ==> stats calculation for the wining parties
(define-map stats {name: (string-ascii 10), symbol: (string-ascii 10)} {count: uint})

;; Public functions
;; Registration function
(define-public (reg (cnic (string-ascii 13)) (dob (string-ascii 10)))
    (let 
        ((exists (map-get? register {voter-address: tx-sender})))
        (asserts! (is-none exists) (err "user exists")) 
        (map-insert register {voter-address: tx-sender} {cnic: cnic, dob: dob})
        (ok "Registration Successful!") 
    )
)

;; Voting function
(define-public (vote (name (string-ascii 10)) (symbol (string-ascii 10)))
    (let 
        (
            (exists (map-get? voting {voter-address: tx-sender}))
            (increase (+ (default-to u0 (get count  (map-get? stats {name: name, symbol: symbol}))) u1))
        )
        (asserts! (is-none exists) (err "same vote exists")) 
        (map-insert voting {voter-address: tx-sender} {name: name, symbol: symbol})
        (map-set stats {name: name, symbol: symbol} {count: increase})
        (ok "Vote casted successfully!") 
    )
)

;; Getting total stats through counting of the votes
(define-read-only (get-stats (name (string-ascii 10)) (symbol (string-ascii 10))) 
    (default-to u0 (get count (map-get? stats {name: name, symbol: symbol})))
)