use candid::{CandidType, Principal};
use ic_cdk::api::msg_caller;
use ic_cdk::{init, post_upgrade, pre_upgrade, query, update};
use serde::{Deserialize, Serialize};
use std::cell::RefCell;
use std::collections::HashMap;

#[derive(Clone, Debug, CandidType, Serialize, Deserialize)]
pub struct UserProfile {
    pub principal: Principal,
    pub display_name: String,
    pub email: Option<String>,
    pub created_at_ns: u64,
    pub updated_at_ns: u64,
}

thread_local! {
    static PROFILES: RefCell<HashMap<Principal, UserProfile>> = RefCell::new(HashMap::new());
}

fn time_now() -> u64 {
    ic_cdk::api::time()
}

#[update]
pub fn upsert_my_profile(display_name: String, email: Option<String>) -> UserProfile {
    let me =msg_caller();
    let now = time_now();
    PROFILES.with(|p| {
        let mut map = p.borrow_mut();
        let profile = map.entry(me).and_modify(|prof| {
            prof.display_name = display_name.clone();
            prof.email = email.clone();
            prof.updated_at_ns = now;
        }).or_insert_with(|| UserProfile {
            principal: me,
            display_name: display_name.clone(),
            email: email.clone(),
            created_at_ns: now,
            updated_at_ns: now,
        });
        profile.clone()
    })
}

#[query]
pub fn get_my_profile() -> Option<UserProfile> {
    let me = msg_caller();
    PROFILES.with(|p| p.borrow().get(&me).cloned())
}

#[query]
pub fn get_profile_of(principal: Principal) -> Option<UserProfile> {
    PROFILES.with(|p| p.borrow().get(&principal).cloned())
}

#[update]
pub fn delete_my_profile() -> bool {
    let me = msg_caller();
    PROFILES.with(|p| p.borrow_mut().remove(&me).is_some())
}

#[pre_upgrade]
fn pre_upgrade_hook() {
    PROFILES.with(|p| {
        let data = p.borrow().clone();
        ic_cdk::storage::stable_save((data,)).expect("failed to save stable state");
    });
}

#[post_upgrade]
fn post_upgrade_hook() {
    if let Ok((data,)) = ic_cdk::storage::stable_restore::<(HashMap<Principal, UserProfile>,)>() {
        PROFILES.with(|p| *p.borrow_mut() = data);
    }
}

#[init]
fn init_canister() {}
