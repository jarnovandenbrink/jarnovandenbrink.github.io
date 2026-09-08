---
title: Lorem ipsum dolor sit amet, consectetur kernel callbacks
date: 2026-08-14
categories: [kernel]
tags: [lorem]
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.

## Nemo enim ipsam voluptatem

Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores, as [documented here](https://learn.microsoft.com). The routine is registered through `PsSetCreateProcessNotifyRoutineEx` and unregistered on unload. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

```c
NTSTATUS RegisterCallback(VOID)
{
    return PsSetCreateProcessNotifyRoutineEx(
        (PCREATE_PROCESS_NOTIFY_ROUTINE_EX)OnCreate,
        FALSE);
}
```

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. The structure below is the reason nobody prints it in full: quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

```c
typedef struct _EPROCESS
{
    KPROCESS Pcb;
    EX_PUSH_LOCK ProcessLock;
    VOID* UniqueProcessId;
    LIST_ENTRY ActiveProcessLinks;
    EX_RUNDOWN_REF RundownProtect;
    ULONG Flags2;
    ULONG Flags;
    LARGE_INTEGER CreateTime;
    ULONGLONG ProcessQuotaUsage[2];
    ULONGLONG ProcessQuotaPeak[2];
    ULONGLONG PeakVirtualSize;
    ULONGLONG VirtualSize;
    LIST_ENTRY SessionProcessLinks;
    VOID* ExceptionPortData;
    EX_FAST_REF Token;
    ULONGLONG WorkingSetPage;
    EX_PUSH_LOCK AddressCreationLock;
    struct _ETHREAD* RotateInProgress;
    struct _ETHREAD* ForkInProgress;
    ULONGLONG HardwareTrigger;
    struct _MM_AVL_TABLE* PhysicalVadRoot;
    VOID* CloneRoot;
    ULONGLONG NumberOfPrivatePages;
    ULONGLONG NumberOfLockedPages;
    VOID* Win32Process;
    struct _EJOB* Job;
    VOID* SectionObject;
    VOID* SectionBaseAddress;
    ULONG Cookie;
    struct _PAGEFAULT_HISTORY* WorkingSetWatch;
    VOID* Win32WindowStation;
    VOID* InheritedFromUniqueProcessId;
    VOID* LdtInformation;
    VOID* VdmObjects;
    ULONGLONG ConsoleHostProcess;
    VOID* DeviceMap;
    VOID* EtwDataSource;
    VOID* FreeTebHint;
    LIST_ENTRY ThreadListHead;
    ULONG ActiveThreads;
    ULONG ImagePathHash;
    ULONG DefaultHardErrorProcessing;
    NTSTATUS LastThreadExitStatus;
    struct _PEB* Peb;
    EX_FAST_REF PrefetchTrace;
    LARGE_INTEGER ReadOperationCount;
    LARGE_INTEGER WriteOperationCount;
    LARGE_INTEGER OtherOperationCount;
    LARGE_INTEGER ReadTransferCount;
    LARGE_INTEGER WriteTransferCount;
    ULONG CommitChargeLimit;
    ULONG CommitChargePeak;
    VOID* AweInfo;
    SE_AUDIT_PROCESS_CREATION_INFO SeAuditProcessCreationInfo;
    MMSUPPORT Vm;
    LIST_ENTRY MmProcessLinks;
    ULONG ModifiedPageCount;
    ULONG JobStatus;
    VOID* VadRoot;
    ULONG SequenceNumber;
    ULONG DiskCounters;
} EPROCESS, *PEPROCESS;
```

## Ut enim ad minima veniam

Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.

<aside>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. This breaks on builds newer than 26100 &mdash; check the offset before you copy it.</p>
</aside>

<figure>
<div class="img-placeholder"><span>windbg screenshot &mdash; drop image here</span></div>
<figcaption>Fig 1 &mdash; lorem ipsum dolor sit amet consectetur.</figcaption>
</figure>

> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.

Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Run it with `sc start drv` and watch the trace.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore.
- Magna aliqua ut enim ad minim veniam quis nostrud.
